import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button, Typography, Link } from '@mui/material';
import { loginUser } from '../../../services/userService';
import TextField from '../../../components/ui/textField';

const LoginForm = () => {
     const [account, setAccount] = useState({
          username: '',
          password: '',
     });
     const [errors, setErrors] = useState(null);

     const handleChange = (e) => {
          const name = e.target.name;
          setAccount({ ...account, [name]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          const user = await loginUser(account.username, account.password);
          console.log(user);
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
                         ورود
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
                              ورود
                         </Button>

                         <Link
                              component={RouterLink}
                              to="/signup"
                              textAlign="center"
                              paragraph
                              sx={{ display: 'block', margin: 0 }}
                         >
                              {' '}
                              عضو نیستید؟ ثبت نام کنید
                         </Link>
                    </form>
               </Grid>
          </Grid>
     );
};

export default LoginForm;
