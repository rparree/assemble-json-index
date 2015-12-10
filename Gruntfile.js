module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('assemble');

    grunt.initConfig({
        assemble: {
           options: {
               plugins: ['lib/index.js'],
               layoutdir: 'test/fixtures/templates/_layouts'
            },
            test : {
                options : {
                    jsonidx : {
                        excludeData : ['internal_id']
                    }
                },
                files :[
                    {
                        expand: true,
                        cwd: 'test/fixtures/pages',
                        src: ['**/*.hbs'],
                        dest: 'test/build'
                    }
                ]
            }
        }
    });

    grunt.registerTask('test', ['assemble']);
};