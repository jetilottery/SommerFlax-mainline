const path = require('path');
const fs = require('fs');

module.exports = function babelTranspile(grunt) {

    function task(buildType) {
        'use strict';
        const cwd = process.cwd();

        grunt.loadNpmTasks('grunt-contrib-copy');

        // change cwd to module directory to load from node_modules
        grunt.file.setBase(cwd, '../jetGameBabelTranspile');


        grunt.loadNpmTasks('grunt-babel');

        // default plugins and presets for all games
        const presets = [
            [path.join(cwd,'../jetGameBabelTranspile', 'node_modules', '@babel/preset-env'), {
                targets:{
                    "esmodules": true
                },
            }],
        ];
        const plugins = [];

        // three possible require config locations: game, included in another build artifact or default
        const requireConfigGame = grunt.template.process('<%= config %>/requireBuildConfig.js');
        const requireConfigBuilder = path.join(cwd, 'requireBuildConfig.js');
        let requireConfigFile = path.join(cwd, 'requireBuildConfigDefault.js');

        // check for them in that order to determine which to use
        if (grunt.file.exists(requireConfigGame)) {
            requireConfigFile = requireConfigGame;
        } else if (grunt.file.exists(requireConfigBuilder)) {
            requireConfigFile = requireConfigBuilder
        }

        const splashjs = grunt.template.process('<%= source %>/js/splash.js');


        grunt.config.merge({
            copy: {
                requireConfig: {
                    src: requireConfigFile,
                    dest: 'requireBuildConfig.js'
                },
                preTranspile: {
                    files: [{
                        expand : true,
                        cwd: '<%= source %>/webapp/',
                        src: ['**', '!launcher.html', '!splash.html'],
                        dest: '<%= target %>/game/',
                        nonull : true
                    },
                        {
                            expand : true,
                            cwd: '<%= components %>',
                            src: ['**', '!jetBuilder/**'],
                            dest: '<%= target %>/jsTmp/',
                            nonull : true
                        }]
                },
                html:{
                    files: [{
                        expand : true,
                        cwd: '<%= source %>/webapp/',
                        src: ['launcher.html', 'splash.html'],
                        dest: '<%= target %>/game/',
                        nonull : true
                    }],
                    options:{
                        process: function(content, srcpath){
                            const gameVersion = grunt.option('gameVersion');
                            if (srcpath.endsWith('/launcher.html')) {
                                const requireBuildConfig = grunt.file.read(requireConfigFile)
                                    .replace('urlArgs:"",', 'urlArgs:"v="+window._cacheFlag.gameVersion+"&t="+window._cacheFlag.revisionTag,');
                                content = content.replace('src="game.js"', '').replace('src=\'game.js\'', '');//in case of still have game.js script tag.
                                const launcherScripts = `
                                <script type="text/javascript" src="require.js?v=${gameVersion}"></script>
                                <script type="text/javascript">
                                    window._cacheFlag = {};
                                    window._cacheFlag.revisionTag = "0";
                                    var revisionTagMatch = window.location.search.match(/&?revisionTag=([\\w-]+)&?/);
                                    if(revisionTagMatch && revisionTagMatch[1]){window._cacheFlag.revisionTag = revisionTagMatch[1];}
                                    window._cacheFlag.gameVersion = "${gameVersion}";
                                    window._cacheFlag.queryStr = "?v=${gameVersion}&t="+window._cacheFlag.revisionTag;

                                    ${requireBuildConfig}

                                    require(["game"]);
                                </script>`;
                                content = content.replace('</body>', launcherScripts + '</body>');
                            } else if (srcpath.endsWith('/splash.html')) {
                                let splashScripts = `
                                <script type="text/javascript">
                                    window._cacheFlag = {};
                                    window._cacheFlag.revisionTag = "0";
                                    var revisionTagMatch = window.location.search.match(/&?revisionTag=([\\w-]+)&?/);
                                    if(revisionTagMatch && revisionTagMatch[1]){window._cacheFlag.revisionTag = revisionTagMatch[1];}
                                    window._cacheFlag.gameVersion = "${gameVersion}";
                                    window._cacheFlag.queryStr = "?v=${gameVersion}&t="+window._cacheFlag.revisionTag;
                                </script>`;
                                if (grunt.file.exists(splashjs)) {
                                    const requireBuildConfig = grunt.file.read(requireConfigFile)
                                        .replace('urlArgs:"",', 'urlArgs:"v="+window._cacheFlag.gameVersion+"&t="+window._cacheFlag.revisionTag,');
                                    splashScripts = `
                                    <script type="text/javascript" src="require.js?v=${gameVersion}"></script>
                                    ${splashScripts}
                                    <script type="text/javascript">
                                        ${requireBuildConfig}
                                        require(["splash"]);
                                    </script>
                                    `;
                                }
                                content = content.replace('</body>', splashScripts + '</body>');
                            }
                            return content;
                        }
                    }
                },
                polyfill: {
                    files: [{
                        expand : true,
                        cwd: '<%= target %>/jsTmp/org/babel/@babel/polyfill/dist/',
                        src: ['polyfill.js'],
                        dest: '<%= target %>/jsTmp/',
                        nonull : true
                    }]
                }
            },

            babel: {
                options: {
                    presets: presets,
                    plugins: plugins
                },
                dev: {
                    options: {
                        sourceMap: true
                    },
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/js',
                        src: '**/*.js',
                        dest: '<%= target %>/jsTmp/',
                        nonull: true
                    }]
                },
                prod: {
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/js',
                        src: '**/*.js',
                        dest: '<%= target %>/jsTmp/',
                        nonull: true
                    }]
                }
            }
        });


        if (buildType === 'dev') {
            grunt.task.run(['copy:requireConfig', 'copy:preTranspile', 'copy:html', 'babel:dev', 'copy:polyfill']);
        } else {
            grunt.task.run(['copy:requireConfig', 'copy:preTranspile', 'copy:html', 'babel:prod', 'copy:polyfill']);
        }

        // reset cwd back to jetGameGruntCompiler
        grunt.file.setBase(cwd);
    }

    grunt.registerTask('prepare-game-babel2', 'Transpile source files to build with babel', task);
};
