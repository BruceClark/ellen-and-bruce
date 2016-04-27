module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: 'bower_components',

    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'style.css': 'assets/styles/manifest.less',
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        atBegin: true
      },

      styles: {
        files: ['assets/styles/*.less'], // which files to watch
        tasks: ['less']
      }
    },

    connect: {
      server: {
        options: {
          port: 9002,
          base: '',
          keepalive: false,
          open: 'http://localhost:9002/index.html'
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('default', 'serve');
}