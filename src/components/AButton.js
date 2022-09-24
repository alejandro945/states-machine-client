import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react'
import { adapterFromClient } from '../adapater';
import { validateMachineData } from '../validation';

const AButton = ({ dataTable }) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = () => {
        if (validateMachineData(dataTable.rows)) {
            console.log(adapterFromClient(dataTable.rows))
            //axios.get('http://machineserver.d69fa166303d4cf4b8b6.eastus.aksapp.io/api/nodes')
        } else {
            enqueueSnackbar('All data fields are required', { variant: 'warning' })
        }
    }
    
    return (
        <Button onClick={handleSubmit} variant='contained' color='error' size='small' sx={{ textTransform: 'capitalize' }}>Enviar</Button>
    )
}

export default AButton