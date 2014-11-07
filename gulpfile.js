var gulp = require('gulp');
var shell = require('gulp-shell');
var downloadAtomShell = require('gulp-download-atom-shell');
var os = require('os');

var platform = os.platform();
gulp.task('download-atom-shell', function(callback) {
  downloadAtomShell({
    version: '0.19.1',
    outputDir: __dirname + '/bin/' + platform
  }, callback);
});

var command = '';
switch(platform) {
  case 'darwin':
    command = 'Atom.app/Contents/MacOS/Atom'
    break;
  case 'win32':
    command = 'atom.exe'
    break;
}

gulp.task('demo', shell.task([
  __dirname + '/bin/' + platform + '/' + command + ' .'
]));
