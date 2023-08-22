import Grid from '@mui/material/Grid';
import LoginForm from './signupForm';

const SignupPage = () => {
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

export default SignupPage;
