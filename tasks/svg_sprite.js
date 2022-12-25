const {
  src,
  dest
} = require('gulp');
const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

module.exports = function svg_sprite() {
  return src('src/svg/**/*.svg')
    .pipe(svgmin({
      plugins: [{
          removeComments: true
        },
        {
          removeEmptyContainers: true
        }
      ]
    }))
    .pipe(cheerio({
      run: ($) => {
        $("[fill]").removeAttr("fill"); // очищаем цвет у иконок по умолчанию, чтобы можно было задать свой
        $("[stroke]").removeAttr("stroke"); // очищаем, если есть лишние атрибуты строк
        $("[style]").removeAttr("style"); // убираем внутренние стили для иконок
      },
      parserOptions: {
        xmlMode: true
      },
    }))
	.pipe(replace('&gt;','>')) // боремся с заменой символа 
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('src/img'))
}