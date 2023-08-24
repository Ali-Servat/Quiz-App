import { AppBar, ListItem, Stack, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import NavLink from './ui/navLink';
import Avatar from './avatar';

const Navbar = () => {
     const user = useSelector((state) => state.auth);

     return (
          <AppBar position="absolute">
               <Toolbar
                    variant="regular"
                    sx={{ justifyContent: 'space-between' }}
               >
                    <Stack direction="row">
                         <ListItem>
                              <NavLink to="/index">صفحه نخست</NavLink>
                         </ListItem>
                         <ListItem>
                              <NavLink to="/myQuizzes"> آزمون های من</NavLink>
                         </ListItem>
                         <ListItem>
                              <NavLink to="/attendQuiz"> شرکت در آزمون</NavLink>
                         </ListItem>
                    </Stack>
                    <Stack direction="row">
                         {user ? (
                              <ListItem sx={{ flexGrow: 1 }}>
                                   {' '}
                                   <Avatar />
                              </ListItem>
                         ) : (
                              <>
                                   <ListItem sx={{ flexGrow: 1 }}>
                                        {' '}
                                        <NavLink to="/signup">عضویت</NavLink>
                                   </ListItem>
                                   <ListItem>
                                        {' '}
                                        <NavLink to="/login">ورود</NavLink>
                                   </ListItem>
                              </>
                         )}
                    </Stack>
               </Toolbar>
          </AppBar>
     );
};

export default Navbar;
