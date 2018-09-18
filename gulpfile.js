const gulp  = require ('gulp');

gulp.task('copy',()=>{
    gulp.src('./index.html').pipe(gulp.dest('./dist'))
})
gulp.task('wa',()=>{
    gulp.watch('./index.html',['copy'])
})
gulp.task('default',['copy','wa'])