/*jslint node: true */
'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);
  require('./tasks/jdists')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'src/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jdists: {
      default_options: {
        options: {},
        files: {
          'tmp/default_options.js': ['test/fixtures/testing1.js', 'test/fixtures/testing2.js']
        }
      },
      custom_options: {
        options: {
          remove: 'none',
          trigger: 'debug'
        },
        files: {
          'tmp/custom_options.js': ['test/fixtures/testing1.js', 'test/fixtures/testing2.js']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jdists', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};