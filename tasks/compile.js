module.exports = function compileGame(grunt) {
	var fs   = require('fs');
	
    grunt.config.merge({
        copy: {
          devCopy: {
            files: [
              {
              expand : true,
              cwd: '<%= target %>/jsTmp/',
              src: '**',
              dest: '<%= target %>/game',
              nonull : true
              }
            ]
          },
		  copyRequireJs: {
            files: [
              {
              expand : true,
              cwd: '<%= target %>/jsTmp/org/requirejs/',
              src: 'require.js',
              dest: '<%= target %>/game',
              nonull : true
              }
            ]
          }
        },

        requirejs: {
          compile:{
            options: {
              baseUrl: '<%= target %>/jsTmp/',
              name: "game",
              out: "<%= target %>/game/game.js",
              logLevel: 1,
              optimize: "none",
              wrap: true,
              mainConfigFile: 'requireBuildConfig.js'
            }
          },
		  compileSplash:{
			options: {
              baseUrl: '<%= target %>/jsTmp/',
              name: "splash",
              out: "<%= target %>/game/splash.js",
              logLevel: 1,
              optimize: "none",
              wrap: true,
              mainConfigFile: 'requireBuildConfig.js'
            }
		  }
		},

        batchCompress: {
          baseLayout: {
			baseUrl: '<%= target %>/game/assetPacks/',
			name: 'glad',
			out: 'glad.js',
			taskNamePrefix: 'baseGlad'
		  },
		  specialLayout: {
			baseUrl: '<%= target %>/game/i18n/',
			name: 'glad',
			out: 'glad.js',
			taskNamePrefix: 'specGlad'
		  }
        }
    });

    function task(buildType) {
		grunt.loadNpmTasks('grunt-contrib-copy');
        if(buildType === 'dev') {
            grunt.task.run(['copy:copyRequireJs', 'copy:devCopy']);
        } else {
            grunt.loadNpmTasks('grunt-contrib-requirejs');
            grunt.loadTasks('../../../../tasks/compile');
			if(fs.existsSync('../../../../src/main/js/splash.js')){
				grunt.task.run(['requirejs:compileSplash']);
			}
            grunt.task.run(['requirejs:compile', 'copy:copyRequireJs','batchCompress']);
        }
    }

    grunt.registerTask('compile-game2', 'Custom compile task', task);
};
