import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button, Typography, Link } from '@mui/material';
import { signupUser } from '../../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn } from '../../../store/slices/authSlice';
import TextField from '../../../components/ui/textField';

const SignupForm = () => {
     const [account, setAccount] = useState({
          username: '',
          email: '',
          password: '',
     });
     const [errors, setErrors] = useState(null);

     const dispatch = useDispatch();
     const user = useSelector((state) => state.auth);

     const handleChange = (e) => {
          const name = e.target.name;
          setAccount({ ...account, [name]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          if (!user) {
               const user = await signupUser(
                    account.username,
                    account.password,
                    account.email
               );
               dispatch(userLoggedIn(user));
          }
     };

     return (
          <Grid
               item
               xs={8}
               sm={6}
               md={4}
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
                    <form
                         noValidate
                         autoComplete="off"
                         onSubmit={(e) => handleSubmit(e)}
                    >
                         <TextField
                              name="username"
                              label="نام کاربری"
                              value={account.username}
                              onChange={(e) => {
                                   handleChange(e);
                              }}
                              required
                         />
                         <TextField
                              name="password"
                              label="رمز عبور"
                              value={account.password}
                              onChange={(e) => {
                                   handleChange(e);
                              }}
                              required
                         />
                         <TextField
                              name="email"
                              label="ایمیل"
                              value={account.email}
                              onChange={(e) => {
                                   handleChange(e);
                              }}
                              required
                         />
                         {errors && (
                              <Typography color="error" align="center">
                                   Error
                              </Typography>
                         )}
                         <Button
                              type="submit"
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
