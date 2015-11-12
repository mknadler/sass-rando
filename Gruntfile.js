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
    },
    pushdocs : {
      command: [
        'git checkout gh-pages',
        'git pull origin master',
        'mv docs/index.html index.html',
        'mv docs/assets assets',
        'git add assets/',
        'git add index.html',
        'git commit -m "Updates documentation"',
        'git push origin gh-pages',
        'git checkout development'
      ].join('&&')
    }

  }

});

  grunt.registerTask('default', ['sassdoc', 'shell:greet', 'shell:test']);
  grunt.registerTask('push-docs', 'shell:pushdocs');
   grunt.registerTask('test', 'shell:test');


  grunt.event.on('sassdoc.start', function (target, src, dest) {
     grunt.log.writeln('SassDoc: compiling documentation from ' + src + ' to ' + dest + '!!!!');
   });

};

