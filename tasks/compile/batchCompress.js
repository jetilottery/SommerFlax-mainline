module.exports = function(grunt) {
	var fs = require('fs');
	var compressConfig;

	function generateCompressConfig(data, tag){
		data.baseUrl = data.baseUrl.substring(0, data.baseUrl.lastIndexOf('/') + 1);
		compressConfig[tag] = {
			options: {
				baseUrl: data.baseUrl,
				name: data.name,
				out: data.baseUrl + data.out,
				logLevel: 1,
				optimize: "none",
				wrap: true
			}
		};
	}
	function compressFiles(){
		var taskArr = [];
		for(var k in compressConfig){
			taskArr.push('requirejs:' + k);
		}
		if(taskArr.length > 0){
			grunt.config.merge({
				requirejs: compressConfig
			});
			grunt.loadNpmTasks('grunt-contrib-requirejs');
			grunt.task.run(taskArr);
		}
	}
	// Used to recursively search through directories and compress all the specific files
	// Available options:
	// 	baseUrl          - directory to scan for the files that need compession
	// 	name             - name of the files that need compression
	// 	out              - name of the compressed file
	// 	taskNamePrefix   - prefix of the generated grunt task name

	function batchCompress(){
		compressConfig = {};
		var tag = 1;
		var doCompress = function(data){
			if(fs.lstatSync(data.baseUrl).isDirectory()){
				var fileArr = fs.readdirSync(data.baseUrl);
				var tempUrl = data.baseUrl;
				for(var i=0; i<fileArr.length; i++){
					data.baseUrl = tempUrl + '/' + fileArr[i];
					if(fs.lstatSync(data.baseUrl).isDirectory()){
						doCompress(data);
					}else{
						if(data.baseUrl.indexOf(data.name + '.js') > -1){
							generateCompressConfig(data, data.taskNamePrefix + tag);
							tag++;
						}
					}
				}
			}
		};
		doCompress(this.data);
		compressFiles();
	}
	grunt.task.registerMultiTask('batchCompress', 'Compress a batch of files.', batchCompress);

};
