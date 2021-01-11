// eslint-disable-next-line @typescript-eslint/no-var-requires
var colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        // padding: {
        //     sm: '8px',
        //     md: '16px',
        //     lg: '24px',
        //     xl: '48px',
        // },
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            // spacing: {
            //     128: '32rem',
            //     144: '36rem',
            // },
            // borderRadius: {
            //     '4xl': '2rem',
            // },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
