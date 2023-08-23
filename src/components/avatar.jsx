import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
     Button,
     Menu,
     MenuItem,
     Avatar as MuiAvatar,
     useTheme,
} from '@mui/material';
import { logout } from '../services/userService';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../store/slices/authSlice';

const Avatar = () => {
     const [anchorEl, setAnchorEl] = useState(null);
     const theme = useTheme();
     const dispatch = useDispatch();

     const handleClick = (e) => {
          setAnchorEl(e.currentTarget);
     };

     const handleClose = (e) => {
          setAnchorEl(null);
     };

     const handleLogout = () => {
          logout();
          dispatch(userLoggedOut());
     };

     return (
          <>
               <Button onClick={(e) => handleClick(e)}>
                    {' '}
                    <KeyboardArrowDownIcon
                         fontSize="medium"
                         sx={{
                              color: theme.palette.primary.contrastText,
                         }}
                    />
                    <MuiAvatar src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" />
               </Button>
               <Menu
                    anchorEl={anchorEl}
                    open={anchorEl ? true : false}
                    onClose={(e) => handleClose(e)}
               >
                    <MenuItem onClick={(e) => handleClose(e)}>
                         <Button onClick={handleLogout}>خروج</Button>
                    </MenuItem>
               </Menu>
          </>
     );
};

export default Avatar;
