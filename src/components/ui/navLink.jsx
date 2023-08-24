import { NavLink as RouterNavLink } from 'react-router-dom';
import { Link as MuiLink, useTheme } from '@mui/material';

const NavLink = ({ to, children }) => {
     const theme = useTheme();

     return (
          <RouterNavLink
               to={to}
               style={{ textWrap: 'noWrap', textDecoration: 'none' }}
          >
               <MuiLink
                    variant="h6"
                    component="span"
                    color={theme.palette.primary.contrastText}
                    underline="hover"
               >
                    {children}
               </MuiLink>
          </RouterNavLink>
     );
};

export default NavLink;
