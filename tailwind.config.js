/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      maxWidth: {
        '336': '84rem', // Custom max-width used in the project
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgb(203 213 225)', // slate-300
            '--tw-prose-headings': 'rgb(243 244 246)', // gray-100
            '--tw-prose-lead': 'rgb(203 213 225)', // slate-300
            '--tw-prose-links': 'rgb(251 146 60)', // orange-400
            '--tw-prose-bold': 'rgb(251 146 60)', // orange-400
            '--tw-prose-counters': 'rgb(148 163 184)', // slate-400
            '--tw-prose-bullets': 'rgb(148 163 184)', // slate-400
            '--tw-prose-hr': 'rgb(148 163 184)', // slate-400
            '--tw-prose-quotes': 'rgb(148 163 184)', // slate-400
            '--tw-prose-quote-borders': 'rgb(234 88 12)', // orange-600
            '--tw-prose-captions': 'rgb(148 163 184)', // slate-400
            '--tw-prose-code': 'rgb(255 255 255)', // white
            '--tw-prose-pre-code': 'rgb(203 213 225)', // slate-300
            '--tw-prose-pre-bg': 'rgb(15 23 42)', // slate-900
            '--tw-prose-th-borders': 'rgb(148 163 184)', // slate-400
            '--tw-prose-td-borders': 'rgb(100 116 139)', // slate-500
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
