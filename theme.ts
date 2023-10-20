import { createTheme } from '@mantine/core';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = createTheme({
  fontFamily: montserrat.style.fontFamily,
  colors: {
    primary: [
      '',
      '',
      '',
      '',
      '',
      '',
      '#383840',
      '',
      '',
      '',
    ],
    secondary: [
      '',
      '',
      '',
      '',
      '',
      '',
      '#c4ab6c',
      '',
      '',
      '',
    ],
    lightgrey: [
      '',
      '',
      '',
      '',
      '',
      '',
      '#fafafa',
      '',
      '',
      '',
    ],
  },
  breakpoints: {
    xs: '0',
    sm: '480px',
    md: '920px',
    lg: '1024px',
    xl: '1200px',
  },
});
