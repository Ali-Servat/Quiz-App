import { Outlet } from 'react-router-dom';
import configureParse from './services/parseConfig';
import Navbar from './components/navbar';
import { useEffect } from 'react';
import { checkCurrentUser } from './services/userService';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from './store/slices/authSlice';

function App() {
     configureParse();

     const dispatch = useDispatch();

     useEffect(() => {
          const user = checkCurrentUser();
          if (user) dispatch(userLoggedIn(user));
     }, []);

     return (
          <div>
               <Navbar />
               <Outlet />
          </div>
     );
}

export default App;
