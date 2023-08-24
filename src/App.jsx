import { Outlet, useNavigate } from 'react-router-dom';
import configureParse from './services/parseConfig';
import { useEffect } from 'react';
import { checkCurrentUser } from './services/userService';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from './store/slices/authSlice';
import Navbar from './components/navbar';

function App() {
     configureParse();

     const dispatch = useDispatch();
     const navigate = useNavigate();

     useEffect(() => {
          navigate('/index');
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
