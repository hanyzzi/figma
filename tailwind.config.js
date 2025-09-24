/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        // Colors - 디자인 토큰 CSS 변수 참조
        colors: {
          // Brand Colors
          brand: {
            primary: 'var(--color-brand-primary)',
            'primary-dark': 'var(--color-brand-primary-dark)',
            'primary-light': 'var(--color-brand-primary-light)',
            secondary: 'var(--color-brand-secondary)',
            tertiary: 'var(--color-brand-tertiary)',
            error: 'var(--color-brand-error)',
          },
          
          // Text Colors
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            tertiary: 'var(--color-text-tertiary)',
            disabled: 'var(--color-text-disabled)',
            success: 'var(--color-text-success)',
            warning: 'var(--color-text-warning)',
            error: 'var(--color-text-error)',
            white: 'var(--color-text-white)',
          },
          
          // Grayscale
          gray: {
            50: 'var(--color-grayscale-50)',
            100: 'var(--color-grayscale-100)',
            200: 'var(--color-grayscale-200)',
            300: 'var(--color-grayscale-300)',
            400: 'var(--color-grayscale-400)',
            500: 'var(--color-grayscale-500)',
            600: 'var(--color-grayscale-600)',
            700: 'var(--color-grayscale-700)',
            800: 'var(--color-grayscale-800)',
            900: 'var(--color-grayscale-900)',
          },
          
          // Border Colors
          border: {
            1: 'var(--color-border-border-1)',
            2: 'var(--color-border-border-2)',
            3: 'var(--color-border-border-3)',
            4: 'var(--color-border-border-4)',
          },
          
          // Button Colors
          button: {
            'primary-bg': 'var(--color-button-primary-bg)',
            'primary-text': 'var(--color-button-primary-text)',
            'primary-hover': 'var(--color-button-primary-hover)',
            'secondary-bg': 'var(--color-button-secondary-bg)',
            'secondary-text': 'var(--color-button-secondary-text)',
            'secondary-hover': 'var(--color-button-secondary-hover)',
            'disabled-bg': 'var(--color-button-disabled-bg)',
            'disabled-text': 'var(--color-button-disabled-text)',
          },
          
          // Background Colors
          bg: {
            primary: 'var(--color-background-primary)',
            secondary: 'var(--color-background-secondary)',
            tertiary: 'var(--color-background-tertiary)',
            white: 'var(--color-background-white)',
          }
        },
        
        // Spacing - 디자인 토큰 참조
        spacing: {
          'xs': 'var(--spacing-xs)',    // 4px
          'sm': 'var(--spacing-sm)',    // 8px
          'md': 'var(--spacing-md)',    // 16px
          'lg': 'var(--spacing-lg)',    // 24px
          'xl': 'var(--spacing-xl)',    // 32px
          '2xl': 'var(--spacing-2xl)',  // 48px
          '3xl': 'var(--spacing-3xl)',  // 64px
          '4xl': 'var(--spacing-4xl)',  // 80px
          '5xl': 'var(--spacing-5xl)',  // 96px
          '6xl': 'var(--spacing-6xl)',  // 128px
          '7xl': 'var(--spacing-7xl)',  // 160px
          '8xl': 'var(--spacing-8xl)',  // 192px
          '9xl': 'var(--spacing-9xl)',  // 256px
        },
  
        // Gap - 더 세밀한 간격
        gap: {
          '2xs': 'var(--gap-2xs)',  // 2px
          'xs': 'var(--gap-xs)',    // 4px
          'sm': 'var(--gap-sm)',    // 6px
          'md': 'var(--gap-md)',    // 8px
          'lg': 'var(--gap-lg)',    // 12px
          'xl': 'var(--gap-xl)',    // 16px
          '2xl': 'var(--gap-2xl)',  // 20px
          '3xl': 'var(--gap-3xl)',  // 24px
          '4xl': 'var(--gap-4xl)',  // 32px
          '5xl': 'var(--gap-5xl)',  // 40px
          '6xl': 'var(--gap-6xl)',  // 48px
        },
  
        // Border Radius
        borderRadius: {
          'xs': 'var(--border-radius-xs)',    // 2px
          'sm': 'var(--border-radius-sm)',    // 4px
          'md': 'var(--border-radius-md)',    // 8px
          'lg': 'var(--border-radius-lg)',    // 12px
          'xl': 'var(--border-radius-xl)',    // 16px
          '2xl': 'var(--border-radius-2xl)',  // 24px
          'full': 'var(--border-radius-full)', // 9999px
        },
  
        // Box Shadow
        boxShadow: {
          'xs': 'var(--shadow-xs)',
          'sm': 'var(--shadow-sm)',
          'md': 'var(--shadow-md)',
          'lg': 'var(--shadow-lg)',
          'xl': 'var(--shadow-xl)',
        },
  
        // Border Width
        borderWidth: {
          'thin': 'var(--border-width-thin)',     // 1px
          'medium': 'var(--border-width-medium)', // 2px
          'thick': 'var(--border-width-thick)',   // 4px
        },
  
        // Opacity
        opacity: {
          '5': 'var(--opacity-5)',   // 0.05
          '10': 'var(--opacity-10)', // 0.1
          '25': 'var(--opacity-25)', // 0.25
          '50': 'var(--opacity-50)', // 0.5
          '75': 'var(--opacity-75)', // 0.75
        },
  
        // Font Family
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
        
        // Font Size - Typography 토큰 활용
        fontSize: {
          // Headings
          'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
          'h2': ['36px', { lineHeight: '44px', fontWeight: '600' }],
          'h3': ['28px', { lineHeight: '36px', fontWeight: '600' }],
          'h4': ['24px', { lineHeight: '32px', fontWeight: '600' }],
          'h5': ['20px', { lineHeight: '28px', fontWeight: '600' }],
          'h6': ['18px', { lineHeight: '26px', fontWeight: '600' }],
          
          // Body Text
          'body-xl': ['20px', { lineHeight: '30px', fontWeight: '400' }],
          'body-large': ['18px', { lineHeight: '28px', fontWeight: '400' }],
          'body-medium': ['16px', { lineHeight: '24px', fontWeight: '400' }],
          'body-small': ['14px', { lineHeight: '20px', fontWeight: '400' }],
          'body-xs': ['12px', { lineHeight: '16px', fontWeight: '400' }],
          
          // Special Text
          'caption-large': ['14px', { lineHeight: '18px', fontWeight: '500' }],
          'caption-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
          'caption-small': ['10px', { lineHeight: '14px', fontWeight: '500' }],
          
          // Button Text
          'button-large': ['16px', { lineHeight: '20px', fontWeight: '600' }],
          'button-medium': ['14px', { lineHeight: '18px', fontWeight: '600' }],
          'button-small': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        },
  
        // Container Max Width
        maxWidth: {
          'container-xs': 'var(--layout-container-xs)',   // 320px
          'container-sm': 'var(--layout-container-sm)',   // 640px
          'container-md': 'var(--layout-container-md)',   // 768px
          'container-lg': 'var(--layout-container-lg)',   // 1024px
          'container-xl': 'var(--layout-container-xl)',   // 1280px
          'container-2xl': 'var(--layout-container-2xl)', // 1536px
        },
      },
    },
    plugins: [],
  }