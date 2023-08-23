import Grid from '@mui/material/Grid';
import LoginForm from './loginForm';

const LoginPage = () => {
     return (
          <Grid
               container
               alignItems="center"
               justifyContent="center"
               sx={{ minHeight: '100vh' }}
          >
               <LoginForm />
          </Grid>
     );
};

export default LoginPage;
