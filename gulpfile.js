var gulp = require('gulp'),
    fs = require('fs'),
    rimraf = require('rimraf'),
    source = require('vinyl-source-stream'),
    _ = require('lodash'),
    config = {
      outputDir: './dist/',
    }, bundler;

gulp.task('clean', function(done){
    rimraf(config.outputDir, done);
});

gulp.task('obfuscator', function(){
  var Options = require('obfuscator').Options,
      obfuscator = require('obfuscator').obfuscator,
      fs = require('fs'),
      files = ['./src/core.js', './src/event.js', './src/enums.js', './src/utils.js', './src/constants.js'];

  files.forEach(function(file){
    var name = file.split('./src/')[1],
        options = new Options([file], './src/', file, true);

    options.compressor = {
      conditionals: true,
      evaluate: true,
      booleans: true,
      loops: true,
      unused: false,
      hoist_funs: false
    };

    obfuscator(options, function (err, obfuscated){

      if(err){
        throw err;
      }

      fs.writeFile('./dist/' + name, obfuscated, function(err){
        if(err){
          throw err;
        }

        console.log('obfuscate', name, ' done!');
      });
    });
  });
});
