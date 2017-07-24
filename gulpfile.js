var gulp=require('gulp');
var del=require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');

gulp.task('default',['script','less'],function () {
    //默认任务代码
    console.log('default task');
});
//
gulp.task('script',function(){
    //通用能力，打包到一个js文件
    gulp.src('js/commons/*.js')
        //连接文件
        .pipe(concat('commons.js'))
        //写出文件
        .pipe(gulp.dest('public/js'))
        //压缩文件
        .pipe(uglify())
        //重命名
        .pipe(rename('commons.min.js'))
        //再次写出文件
        .pipe(gulp.dest('public/js'));

    
    //page目录下的每个文件，单独压缩处理
    gulp.src('js/page/*.js')
        //.pipe(watch('js/page/*.js'))
        //压缩文件
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js/page'));
});

//
gulp.task('less',function(){
    gulp.src('less/face.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));

    gulp.src('less/page/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/css/page'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css/page'));
        
});

gulp.task('clear',function(){
    return del([
        'public/js/page',
        'public/js/commons*',
        'public/css/page',
        'public/css/*.css'
    ]);
});

//gulp.watch('js/**/*.js',['js']);
//gulp.watch('less/**/*.less',['less']);