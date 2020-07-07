let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('mix-html-builder');

mix.sass('src/scss/app.scss', 'public/assets/css')
    .js('src/js/app.js', 'public/assets/js')
    .html({
        htmlRoot: './src/*.html', // Your html root file(s)
        output: 'public', // The html output folder
        minify: {
            removeComments: true,
        },
    })
    .browserSync({
        notify: false,
        proxy: 'gettup-landing.aw',
    })
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });
