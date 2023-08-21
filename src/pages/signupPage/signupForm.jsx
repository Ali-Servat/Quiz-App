import Grid from '@mui/material/Grid';
import { Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '../../components/ui/textField';

const SignupForm = () => {
     return (
          <Grid
               item
               xs={2}
               sx={{
                    border: '1px solid grey',
                    padding: '20px',
                    borderRadius: '10px',
               }}
          >
               <Grid item>
                    <Typography
                         variant="h4"
                         component="h2"
                         align="center"
                         gutterBottom
                    >
                         ایجاد حساب
                    </Typography>
               </Grid>
               <Grid item>
                    <form noValidate autoComplete="off">
                         <TextField
                              label="نام کاربری"
                              value={''}
                              onChange={() => {}}
                         />
                         <TextField
                              label="ایمیل"
                              value={''}
                              onChange={() => {}}
                         />
                         <TextField
                              label="رمز عبور"
                              value={''}
                              onChange={() => {}}
                         />
                         <Button
                              variant="contained"
                              fullWidth
                              size="large"
                              sx={{ margin: '10px 0' }}
                         >
                              ثبت نام
                         </Button>

                         <Link
                              component={RouterLink}
                              to="/login"
                              textAlign="center"
                              paragraph
                              sx={{ display: 'block', margin: 0 }}
                         >
                              {' '}
                              قبلا ثبت نام کرده اید؟ وارد شوید
                         </Link>
                    </form>
               </Grid>
          </Grid>
     );
};

export default SignupForm;
