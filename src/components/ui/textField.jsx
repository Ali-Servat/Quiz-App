import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ name, label, value, onChange, dir = 'ltr', ...rest }) => {
     return (
          <MuiTextField
               variant="outlined"
               fullWidth
               margin="dense"
               name={name}
               label={label}
               value={value}
               onChange={(e) => onChange(e)}
               dir={dir}
               {...rest}
          />
     );
};

export default TextField;
