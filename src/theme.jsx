import { createTheme } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

export const theme = createTheme({
     direction: 'rtl',
     typography: {
          fontFamily: ['Scheherazade New', 'Poppins', 'sans-serif'].join(','),
          fontWeightLight: '400',
          fontWeightRegular: '500',
          fontWeightMedium: '600',
          fontWeightBold: '700',
     },
});

export const cacheRtl = createCache({
     key: 'muirtl',
     stylisPlugins: [prefixer, rtlPlugin],
     prepend: true,
});
