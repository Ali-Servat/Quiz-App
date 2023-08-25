import { Grid, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuiz } from '../../../services/quizService';
import { quizAdded } from '../../../store/slices/quizSlice';
import TextField from '../../../components/ui/textField';

const CreateQuizForm = () => {
     const [value, setValue] = useState('');
     const user = useSelector((state) => state.auth.objectId);
     const dispatch = useDispatch();

     const handleChange = (e) => {
          setValue(e.target.value);
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          const quiz = await addQuiz(user, value);
          setValue('');
          dispatch(quizAdded(value));
     };
     return (
          <form onSubmit={(e) => handleSubmit(e)}>
               <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    columnSpacing={2}
                    padding={2}
               >
                    <Grid item>
                         <Typography>آزمون جدید:</Typography>
                    </Grid>
                    <Grid item>
                         <TextField
                              label="نام آزمون"
                              value={value}
                              dir="rtl"
                              onChange={(e) => handleChange(e)}
                         />
                    </Grid>
                    <Grid item>
                         <Button type="submit" variant="outlined">
                              +
                         </Button>
                    </Grid>
               </Grid>
          </form>
     );
};

export default CreateQuizForm;
