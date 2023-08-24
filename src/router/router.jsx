import {
     createBrowserRouter,
     createRoutesFromElements,
     Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import LoadingPage from './pages/loadingPage';
import IndexPage from './pages/indexPage';
const myQuizzesPage = lazy(() => import('./pages/myQuizzesPage'));
const attendQuizPage = lazy(() => import('./pages/attendQuizPage'));
const SignupPage = lazy(() => import('./pages/signupPage'));
const LoginPage = lazy(() => import('./pages/loginPage'));

const router = createBrowserRouter(
     createRoutesFromElements(
          <Route path="/" element={<App />}>
               <Route path="/index" index element={<IndexPage />} />
               <Route
                    path="/myQuizzes"
                    element={wrapInSuspense(myQuizzesPage)}
               />
               <Route
                    path="/attendQuiz"
                    element={wrapInSuspense(attendQuizPage)}
               />
               <Route path="/signup" element={wrapInSuspense(SignupPage)} />
               <Route path="/login" element={wrapInSuspense(LoginPage)} />
          </Route>
     )
);

function wrapInSuspense(ReactEl) {
     return (
          <Suspense fallback={<LoadingPage />}>
               <ReactEl />
          </Suspense>
     );
}

export default router;
