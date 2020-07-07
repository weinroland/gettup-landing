const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/**/*.html'],
    theme: {
        colors: {
            white: '#fff',
            purple: '#4e125a',
            red: '#fe2736',
            blue: {
                100: 'rgba(20, 12, 100, 0.1)',
                200: '#aba9c6',
                500: '#140c64',
            },
        },
        extend: {},
        fontSize: {
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '3rem',
            '4xl': '4rem',
            '5xl': '5rem',
            '6xl': '6rem',
            '7xl': '11rem',
        },
        borderRadius: {
            none: '0',
            default: '4px',
            lg: '14px',
        },
        lineHeight: {
            none: '.875',
            tight: '1.125',
            relaxed: '2.4',
            loose: '2.75',
        },
        maxWidth: {
            none: 'none',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            full: '100%',
            '100vw': '100vw',
        },
    },
    variants: {},
    plugins: [],
};
