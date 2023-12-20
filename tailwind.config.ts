import type { Config } from 'tailwindcss';

const config: Config = {
    mode: 'jit',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            fontSize: {
                little: ['0.55rem', '1rem'],
                tiny: ['0.35rem', '1rem']
            }
        }
    },
    variants: {
        extend: {
            animation: ['group-hover']
        }
    },
    plugins: []
};
export default config;
