/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Shared Wellness Palette
                'sage': {
                    50: '#f2f8f5',
                    100: '#e6f1ec',
                    200: '#cce3d9',
                    DEFAULT: '#e8f3ee',
                },
                'rose': {
                    50: '#fffafa',
                    100: '#fdf2f2',
                    DEFAULT: '#fdf2f2',
                },
                'sand': {
                    50: '#fefcf9',
                    100: '#faf7f2',
                    DEFAULT: '#faf7f2',
                },
                'clay': '#b38b6d',
                'slate-well': '#f0f4f8',
            },
        },
    },
    plugins: [],
}
