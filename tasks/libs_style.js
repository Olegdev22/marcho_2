const plugins = [
  'node_modules/slick-carousel/slick/slick.scss',
  'node_modules/swiper/swiper-bundle.css',
  'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
  'node_modules/rateyo/src/jquery.rateyo.css',
  'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
  'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
  'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css'
];

const {
  src,
  dest
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');

module.exports = function libs_style(done) {
  if (plugins.length > 0) {
    return src(plugins)
      .pipe(map.init())
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(concat('libs.min.css'))
      .pipe(map.write('../sourcemaps/'))
      .pipe(dest('build/css/'))
  } else {
    return done(console.log(chalk.bgYellow(`${chalk.bold('WARNING!')} You did not add any CSS/SCSS plugins.`)));
  }
}