import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['SuperAdmin 1', 'Option 2'];

export default function ControllableStates() {

  return (
    <div>

      <Autocomplete
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="ตำเเหน่ง" />}
      />
    </div>
  );
}