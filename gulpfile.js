var gulp = require('gulp');
var shell = require('gulp-shell');
var downloadAtomShell = require('gulp-download-atom-shell');

gulp.task('downloadAtomShell', function(callback) {
  downloadAtomShell({
    version: '0.19.1',
    outputDir: 'bin'
  }, callback);
});

gulp.task('demo', shell.task([
  __dirname + '/bin/Atom.app/Contents/MacOS/Atom .'
]));
