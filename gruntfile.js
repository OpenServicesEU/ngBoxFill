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
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'ng-boxfill.min.css': 'ng-boxfill.css'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint', 'csslint', 'uglify', 'cssmin']);
  grunt.registerTask('travis', ['jshint', 'csslint' ]);
};
