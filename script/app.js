#!/usr/bin/env node

var path = require("path");
var os = require("os");
var exec = require("child_process").exec;

var paths = {
  darwin: path.join(__dirname, "../bin/Atom.app/Contents/MacOS/Atom"),
  linux: path.join(__dirname, "../bin/atom"),
  win32: path.join(__dirname, "../bin/atom.exe")
}

exec(paths[os.platform()] + " " + path.join(__dirname, ".."));
