"use strict";
var gulp = require("gulp");
var del = require("del");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var project = ts.createProject("tsconfig.json");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tslint = require('gulp-tslint');
var sass = require('gulp-sass');
gulp.task('through', function () {
    return gulp
        .src(['src/index.html'])
        .pipe(gulp.dest('dist'));
});
//gulp.task('compile', function () {
//    var result = gulp.src('src/**/*{ts,tsx}')
//        .pipe(ts(project));
//    return result.js.pipe(gulp.dest('.tmp'));
//});
//
//gulp.task('bundle', ['compile'], function () {
//
//    var b = browserify('.tmp/bootstrap.js');
//    return b.bundle()
//        .pipe(source('bundle.js'))
//        .pipe(gulp.dest('dist'));
//});
/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', function () {
    return gulp.src("src/**/*.{ts,tsx}")
        .pipe(tslint({
        formatter: 'prose'
    }))
        .pipe(tslint.report());
});
/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], function () {
    var tsResult = gulp.src("src/**/*.{ts,tsx}")
        .pipe(sourcemaps.init())
        .pipe(ts(project));
    return tsResult.js
        .pipe(sourcemaps.write(".", { sourceRoot: '/src' }))
        .pipe(gulp.dest("dist"));
});
gulp.task('sass', function () {
    return gulp.src("src/**/*.sass")
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});
gulp.task('clean', function (done) {
    del(['.tmp'], done.bind(this));
});
/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});
/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts", "src/**/*.tsx"], ['compile' /*, 'bundle'*/]).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html"], ['through']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(["src/**/*.sass"], ['sass']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        'bootstrap/dist/**/**',
        'jquery/dist/**',
        'react/dist/react.min.js',
        '../systemjs.config.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("dist/lib"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("config", function () {
    return gulp.src([
        'systemjs.config.js'
    ], { cwd: "" }) /* Glob required here. */
        .pipe(gulp.dest("dist/lib"));
});
/**
 * Build the project.
 */
gulp.task("build", ['libs', 'config', 'compile', 'sass', 'through', 'watch'], function () {
    console.log("Building the project ...");
});
//# sourceMappingURL=gulpfile.js.map