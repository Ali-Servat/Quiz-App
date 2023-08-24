import { Grid, Typography, useTheme } from '@mui/material';

import React from 'react';

const IndexPage = () => {
     const theme = useTheme();

     return (
          <Grid
               container
               alignItems="center"
               justifyContent="center"
               sx={{
                    minHeight: '100vh',
               }}
               direction="column"
          >
               <Typography variant="h1" component="h1">
                    آزمون یار
               </Typography>

               <Typography variant="h6" component="p" lineHeight={4}>
                    راهی ساده برای مدیریت آزمون هایتان
               </Typography>
          </Grid>
     );
};

export default IndexPage;
