module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['ng-boxfill.js','gruntfile.js']
    },
    csslint: {
      strict: {
        src: ['ng-boxfill.css']
      },
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
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('default', [ 'jshint', 'csslint', 'uglify']);
  grunt.registerTask('travis', [ 'jshint', 'csslint' ]);
};
