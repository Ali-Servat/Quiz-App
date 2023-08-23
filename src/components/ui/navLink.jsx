import { NavLink as RouterNavLink } from 'react-router-dom';
import { Link as MuiLink, useTheme } from '@mui/material';

const NavLink = ({ to, children }) => {
     const theme = useTheme();

     return (
          <RouterNavLink to={to}>
               <MuiLink
                    variant="h5"
                    component="span"
                    color={theme.palette.primary.contrastText}
               >
                    {children}
               </MuiLink>
          </RouterNavLink>
     );
};

export default NavLink;
