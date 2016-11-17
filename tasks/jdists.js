/**
 * @file grunt-jdists
 *
 * Code block processing tools
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 2.0.0
 * @date 2016-11-17
 */
var jdists = require('jdists');
module.exports = function (grunt) {
  grunt.registerMultiTask('jdists', 'Code Block Processing', function () {
    var options = this.options({
      remove: 'remove,test,debug',
      trigger: 'release'
    });
    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        else {
          return true;
        }
      }).map(function (filepath) {
        return jdists.build(filepath, options);
      }).join('\n');
      grunt.file.write(file.dest, src);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};