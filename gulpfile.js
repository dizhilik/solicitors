var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');
gulp.task('sass', function () {
return gulp.src('dist/scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(autoprefixer(['last 15 versions','>1%','ie 9']))
.pipe(gulp.dest('app/css'));
});
gulp.task('sprite', function () {
var spriteData = gulp.src('dist/img/sprite/*.png').pipe(spritesmith({
imgName: 'sprite.png',
cssName: '_sprite.scss',
imgPath: '../img/sprite.png',
}));
var imgStream = spriteData.img
.pipe(gulp.dest('app/img/'));

var cssStream = spriteData.css
.pipe(gulp.dest('dist/scss/'));
return merge(imgStream, cssStream);
});
gulp.task('watch', ['sass'], function(){
gulp.watch('dist/scss/**/*.scss', ['sass']);
})
