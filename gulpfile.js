const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass-watch', (done) => {
    gulp.watch('./src/styles/**/*.scss', function sassBuild(done) {
        gulp.src(['./src/styles/**/*.scss'])
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(gulp.dest('./docs/css'));
        done();
    });
    done();
})

gulp.task('jade-watch', (done) => {
    gulp.watch('./src/**/*.pug', function jadeBuild(done) {
        gulp.src('./src/jade/**/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('docs'))
            .on('error', err => done(err));
        done();
    });
    done();
});