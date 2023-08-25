import { Grid, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizzesByUser } from '../../../services/quizService';
import { quizzesLoaded } from '../../../store/slices/quizSlice';

const QuizzesTable = () => {
     const userId = useSelector((state) => state.auth.objectId);
     const quizzes = useSelector((state) => state.quizzes);
     const dispatch = useDispatch();

     useEffect(() => {
          (async () => {
               const quizzes = await getQuizzesByUser(userId);
               dispatch(quizzesLoaded(quizzes));
          })();
     }, [quizzes]);

     return (
          <Grid
               container
               direction="row"
               alignItems="center"
               justifyContent="center"
          >
               <Grid item lg={8}>
                    <TableContainer component={Paper}>
                         <Table
                              sx={{ minWidth: 650 }}
                              aria-label="simple table"
                         >
                              <TableHead>
                                   <TableRow>
                                        <TableCell>شناسه آزمون</TableCell>
                                        <TableCell>نام آزمون</TableCell>
                                        <TableCell>تعداد سوالات</TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   {quizzes &&
                                        quizzes.map((quiz) => (
                                             <TableRow
                                                  key={quiz.objectId}
                                                  sx={{
                                                       '&:last-child td, &:last-child th':
                                                            { border: 0 },
                                                  }}
                                             >
                                                  <TableCell
                                                       component="th"
                                                       scope="row"
                                                  >
                                                       {quiz.objectId}
                                                  </TableCell>
                                                  <TableCell>
                                                       {quiz.name}
                                                  </TableCell>
                                                  <TableCell>
                                                       {quiz.questions
                                                            ? quiz.questions
                                                                   .length
                                                            : 0}
                                                  </TableCell>
                                                  <TableCell>
                                                       <Button>نمایش</Button>
                                                  </TableCell>
                                             </TableRow>
                                        ))}
                              </TableBody>
                         </Table>
                    </TableContainer>
               </Grid>
          </Grid>
     );
};

export default QuizzesTable;
