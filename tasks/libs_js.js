const plugins = [
	'node_modules/jquery/dist/jquery.js',
	'node_modules/slick-carousel/slick/slick.js',
	'node_modules/mixitup/dist/mixitup.js',
	'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
	'node_modules/swiper/swiper-bundle.js',
	'node_modules/rateyo/src/jquery.rateyo.js',
	'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
	'node_modules/jquery-form-styler/dist/jquery.formstyler.js'
];
const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');



module.exports = function libs_js(done) {
	if (plugins.length > 0)
		return src(plugins)
			.pipe(map.init())
			.pipe(uglify())
			.pipe(concat('libs.min.js'))
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/js/'))
	else {
		return done(console.log(chalk.bgYellow(`${chalk.bold('WARNING!')} You did not add any JavaScript plugins.`)));
	}
}