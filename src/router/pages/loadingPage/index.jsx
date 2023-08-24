import { Grid } from '@mui/material';

import React from 'react';

const LoadingPage = () => {
     return (
          <Grid
               container
               alignItems="center"
               justifyContent="center"
               sx={{ minHeight: '100vh' }}
          >
               <div>loading...</div>
          </Grid>
     );
};

export default LoadingPage;
