import authReducer from './slices/authSlice';
import quizzesReducer from './slices/quizSlice';

const rootReducer = { auth: authReducer, quizzes: quizzesReducer };

export default rootReducer;
