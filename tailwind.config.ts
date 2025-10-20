import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          inverse: 'var(--color-bg-inverse)',
          overlay: 'var(--color-bg-overlay)',
        },
        // Text colors
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          disabled: 'var(--color-text-disabled)',
          inverse: 'var(--color-text-inverse)',
          link: 'var(--color-text-link)',
          'link-hover': 'var(--color-text-link-hover)',
        },
        // Border colors
        border: {
          primary: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          focus: 'var(--color-border-focus)',
          error: 'var(--color-border-error)',
        },
        // Interactive colors
        interactive: {
          primary: 'var(--color-interactive-primary)',
          'primary-hover': 'var(--color-interactive-primary-hover)',
          'primary-active': 'var(--color-interactive-primary-active)',
          'primary-disabled': 'var(--color-interactive-primary-disabled)',
          secondary: 'var(--color-interactive-secondary)',
          'secondary-hover': 'var(--color-interactive-secondary-hover)',
          'secondary-active': 'var(--color-interactive-secondary-active)',
          danger: 'var(--color-interactive-danger)',
          'danger-hover': 'var(--color-interactive-danger-hover)',
          'danger-active': 'var(--color-interactive-danger-active)',
        },
        // Status colors
        status: {
          error: 'var(--color-status-error)',
          'error-bg': 'var(--color-status-error-bg)',
          warning: 'var(--color-status-warning)',
          'warning-bg': 'var(--color-status-warning-bg)',
          success: 'var(--color-status-success)',
          'success-bg': 'var(--color-status-success-bg)',
          info: 'var(--color-status-info)',
          'info-bg': 'var(--color-status-info-bg)',
        },
        // Surface colors
        surface: {
          primary: 'var(--color-surface-primary)',
          secondary: 'var(--color-surface-secondary)',
          tertiary: 'var(--color-surface-tertiary)',
          elevated: 'var(--color-surface-elevated)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
