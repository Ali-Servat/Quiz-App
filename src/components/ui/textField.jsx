import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ label, value, onChange }) => {
     return (
          <MuiTextField
               variant="outlined"
               fullWidth
               margin="dense"
               label={label}
               value={value}
               onChange={(e) => onChange(e)}
          />
     );
};

export default TextField;
