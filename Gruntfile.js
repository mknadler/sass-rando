module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
 grunt.initConfig({
  'sassdoc': {
    'default': {
      'src': 'sass/',
      'dest': 'docs/'
    }
  },
  'shell': {
    options: {
      stderr: true
    },
    greet: {
      command: function () {
        return 'echo ' + 'Running Sass unit tests with True:';
      }
    },
    test: {
      command: 'true-cli test/test.scss'
    }

  }

});

  grunt.registerTask('default', ['sassdoc', 'shell:greet', 'shell:test']);

  grunt.event.on('sassdoc.start', function (target, src, dest) {
     grunt.log.writeln('SassDoc: compiling documentation from ' + src + ' to ' + dest + '!!!!');
   });

};

