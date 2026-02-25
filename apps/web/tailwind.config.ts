import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
                extend: {
                    colors: {
                        forest: '#1C3322',
                        lime: '#C2E812',
                        stone: {
                            50: '#FAFAF9',
                            100: '#F5F5F4',
                            200: '#E7E5E4',
                            800: '#292524',
                            900: '#1C1917',
                        }
                    },
                    borderRadius: {
                        '4xl': '2rem',
                    },
                    boxShadow: {
                        'soft': '0 4px 20px -2px rgba(28, 51, 34, 0.08)',
                    }
                }
            },
  plugins: [],
};
export default config;
