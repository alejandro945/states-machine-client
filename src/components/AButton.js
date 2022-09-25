import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import React from 'react'
import { adapterFromClient, adapterFromServer } from '../adapater';
import { validateMachineData } from '../validation';
import axios from 'axios'

const AButton = ({ dataTable, machineType, handleDiagramData, isDisabled }) => {
    const { enqueueSnackbar } = useSnackbar()
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async () => {
        try {
            if (validateMachineData(dataTable.rows)) {
                setLoading(true)
                const matrix = adapterFromClient(dataTable.rows, dataTable.columns);
                const response = await axios.post('https://machines-server.herokuapp.com/api/minimize', { matrix: matrix, machineType: (machineType === 'Moore') })
                setLoading(false)
                handleDiagramData(adapterFromServer(response.data))
                enqueueSnackbar('See the minimum machine in the diagram bellow 👇', { variant: 'success' })
            } else {
                enqueueSnackbar('All data fields are required', { variant: 'warning' })
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar('Server Error', { variant: 'error' })
            setLoading(false)
        }
    }

    return (
        <LoadingButton disabled={isDisabled} loading={loading} onClick={handleSubmit} variant='contained' color='error' size='small' sx={{ textTransform: 'capitalize' }}>Enviar</LoadingButton>
    )
}

export default AButton