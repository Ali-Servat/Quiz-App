import {
     createBrowserRouter,
     createRoutesFromElements,
     Route,
} from 'react-router-dom';
import LoginPage from './pages/signupPage/signupPage';

const router = createBrowserRouter(
     createRoutesFromElements(<Route path="/signup" element={<LoginPage />} />)
);

export default router;
