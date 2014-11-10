#!/usr/bin/env node

var request = require("request");
var fs = require("fs");
var os = require("os");
var extract = require("extract-zip");
var noop = function() {};

request.get({ uri: "https://api.github.com/repos/atom/atom-shell/releases", headers: { "User-Agent": "install.js" } }, function(error, response, body) {
  var json = JSON.parse(body)[0];
  var version = json.tag_name;
  var name = "atom-shell-" + version + "-" + os.platform() + "-" + os.arch() + ".zip"

  json.assets.forEach(function(asset) {
    if(asset.name == name) {
      request.get({ uri: "https://api.github.com/repos/atom/atom-shell/releases/assets/" + asset.id, headers: { "User-Agent": "install.js", "Accept": "application/octet-stream" } })
        .on("end", function() {
          extract(name, { dir: "bin" }, noop);
          fs.unlink(name, noop);
        })
        .pipe(fs.createWriteStream(name));
    }
  });
});
