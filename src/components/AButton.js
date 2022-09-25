import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react'
import { adapterFromClient } from '../adapater';
import { validateMachineData } from '../validation';
import { axios } from 'axios'

const AButton = ({ dataTable, machineType }) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async () => {
        if (validateMachineData(dataTable.rows)) {
            const matrix = adapterFromClient(dataTable.rows, dataTable.columns);
            const response = await axios.post('https://machines-server.herokuapp.com/api/minimize', { matrix: matrix, machineType: (machineType === 'Moore') })
            console.log(response.data)
        } else {
            enqueueSnackbar('All data fields are required', { variant: 'warning' })
        }
    }

    return (
        <Button onClick={handleSubmit} variant='contained' color='error' size='small' sx={{ textTransform: 'capitalize' }}>Enviar</Button>
    )
}

export default AButton