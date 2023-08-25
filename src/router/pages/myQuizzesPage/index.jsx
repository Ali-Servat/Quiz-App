import Grid from '@mui/material/Grid';
import CreateQuizForm from './createQuizForm';
import QuizzesTable from './quizzesTable';

const myQuizzesPage = () => {
     return (
          <Grid sx={{ marginTop: '68px' }}>
               <CreateQuizForm />
               <QuizzesTable />
          </Grid>
     );
};

export default myQuizzesPage;
