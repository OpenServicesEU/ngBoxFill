module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['ng-boxfill.js','gruntfile.js']
    },
    uglify: {
      js: {
        files: {
          'ng-boxfill.min.js': 'ng-boxfill.js'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', [ 'jshint', 'uglify']);
};
