import React from 'react'
import TextField from '@mui/material/TextField';

const ATextField = ({ name, label, handleChange, finite, type }) => {
  return (
    <TextField name={name} fullWidth label={label} type={type} variant="outlined" value={finite} onChange={handleChange} />
  )
}

export default ATextField