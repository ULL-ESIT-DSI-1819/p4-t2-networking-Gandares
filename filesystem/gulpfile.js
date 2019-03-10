var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install", shell.task([
    "npm i -g gulp static-server",
    "npm install -g nodemon",
    "npm install -g gulp-shell"
]));

gulp.task("tell", shell.task("telnet localhost 5432"));

gulp.task("ldj", shell.task("node ldj-client.js"));
gulp.task("wjc", shell.task("node net-watcher-json-client.js"));
gulp.task("wjs", shell.task("node net-watcher-json-service.js"));
gulp.task("wlc", shell.task("node net-watcher-ldj-client.js"));
gulp.task("w", shell.task("node net-watcher.js"));
gulp.task("tjs", shell.task("node test-json-service.js"));