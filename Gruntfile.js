module.exports = function(grunt) {

    const path = require('path');

    const source = path.resolve('../../../../src/main');
    const config = path.resolve('../../../../src/config');
    const target = path.resolve('../../../../target');
    const components = path.resolve('../..');

    grunt.initConfig({
        // paths
        source: source,
        config: config,
        components: components,
        target: target
    });

    // Load any tasks from the tasks directory
    grunt.task.loadTasks('tasks');
    grunt.task.loadTasks('../../../../tasks');

    // default tasks for backwards compatability
    grunt.registerTask('prod', [
        'lint-game:prod',
        'prepare-game:prod',
        'compile-game:prod',
        'create-manifest:prod',
    ]);
    grunt.registerTask('dev', [
        'lint-game:dev',
        'prepare-game:dev',
        'compile-game:dev',
        'create-manifest:dev',
    ]);
    grunt.registerTask('default', ['prod']);
};