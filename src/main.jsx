import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, CacheProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material';
import { theme, cacheRtl } from './theme';
import router from './router/router';
import configureParse from './services/parseConfig';
import App from './App.jsx';

configureParse();

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <StyledEngineProvider injectFirst>
               <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                         <RouterProvider router={router}>
                              <App />
                         </RouterProvider>
                    </ThemeProvider>
               </CacheProvider>
          </StyledEngineProvider>
     </React.StrictMode>
);
