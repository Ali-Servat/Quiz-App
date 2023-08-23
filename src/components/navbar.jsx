import { AppBar, List, ListItem, Menu, Stack, Toolbar } from '@mui/material';
import NavLink from './ui/navLink';

const Navbar = () => {
     return (
          <AppBar position="absolute">
               <Toolbar
                    variant="regular"
                    sx={{ justifyContent: 'space-between' }}
               >
                    <Stack>
                         <ListItem>
                              <NavLink>خانه</NavLink>
                         </ListItem>
                    </Stack>
                    <Stack direction="row">
                         <ListItem sx={{ flexGrow: 1 }}> profile</ListItem>
                         <ListItem sx={{ flexGrow: 1 }}>
                              {' '}
                              <NavLink to="/signup">عضویت</NavLink>
                         </ListItem>
                         <ListItem>
                              {' '}
                              <NavLink to="/login">ورود</NavLink>
                         </ListItem>
                    </Stack>
               </Toolbar>
          </AppBar>
     );
};

export default Navbar;
