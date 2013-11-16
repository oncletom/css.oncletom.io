'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      blog: {
        src: 'src/js/main.js',
        dest: 'dist/blog.min.js'
      }
    },

    less: {
      options: {
        paths: [
          'src/less/common',
          'bower_components/bootstrap/less'
        ],
        cleancss: true
      },

      fonts: {
        src: 'src/less/fonts.css',
        dest: 'dist/fonts.min.css'
      },

      apps: {
        expand: true,
        flatten: true,
        ext: '.min.css',
        src: 'src/less/*.less',
        dest: 'dist/'
      }
    },

    watch: {
      css: {
        files: 'src/less/**/*.{css,less}',
        tasks: ['less']
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less', 'uglify']);
};