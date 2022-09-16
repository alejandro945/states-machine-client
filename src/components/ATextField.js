import React from 'react'
import TextField from '@mui/material/TextField';

const ATextField = ({handleChange, finite}) => {
  return (
    <TextField fullWidth multiline rows={4}  label="Data" variant="outlined" value={finite} onChange={handleChange}/>
  )
}

export default ATextField