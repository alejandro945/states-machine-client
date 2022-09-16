import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ASelect({handleChange, machine}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-type-machine">Select your machine</InputLabel>
        <Select labelId="select-type-machine" value={machine} label="Select your machine" onChange={handleChange} >
          <MenuItem value={'moore'}>Moore</MenuItem>
          <MenuItem value={'mealy'}>Mealy</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
