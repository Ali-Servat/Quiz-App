import {
     createBrowserRouter,
     createRoutesFromElements,
     Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import LoginPage from './pages/loginPage';
const SignupPage = lazy(() => import('./pages/signupPage/signupPage'));

const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path="/" element={<App />}>
               <Route
                    path="/signup"
                    element={
                         <Suspense fallback={<div>loading...</div>}>
                              <SignupPage />
                         </Suspense>
                    }
               />
               <Route path="/login" element={<LoginPage />} />
          </Route>
     )
);

export default router;
