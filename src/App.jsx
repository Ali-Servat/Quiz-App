import { Outlet } from 'react-router-dom';
import configureParse from './services/parseConfig';
import Navbar from './components/navbar';

function App() {
     configureParse();

     return (
          <div>
               <Navbar />
               <Outlet />
          </div>
     );
}

export default App;
