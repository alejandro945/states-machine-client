import * as React from 'react';
import { Box, Grid, Typography, Alert, AlertTitle } from '@mui/material';
import ASelect from './components/ASelect';
import ATextField from './components/ATextField';
import { generateColumns, generateRows } from './utils';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import { SnackbarProvider } from 'notistack'
import AButton from './components/AButton';
//import Graphviz from 'graphviz-react';
//import axios from 'axios'

function App() {
  const [dataTable, setDataTable] = React.useState({ columns: [], rows: [] })
  const [machine, setMachine] = React.useState({ typeMachine: '', amountOfStates: 0, alphabet: '' });
  const [open, setOpen] = React.useState(false)
  
  React.useEffect(() => {
    setOpen(validateBeforeShowMachineTable())
  }, [machine])// eslint-disable-line react-hooks/exhaustive-deps

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setMachine({ ...machine, [name]: value });
  };

  const processRowUpdate = React.useCallback(
    (newRow) =>
      new Promise((resolve) => {
        setDataTable({
          ...dataTable, rows: [
            ...dataTable.rows.slice(0, newRow.id - 1),
            newRow,
            ...dataTable.rows.slice(newRow.id, dataTable.rows.length)
          ]
        })
        resolve(newRow)
      }),
    [dataTable],
  );

  const validateBeforeShowMachineTable = () => {
    if (machine.typeMachine !== '' && machine.amountOfStates > 0 && machine.alphabet !== '') {
      const columns = generateColumns(machine.alphabet.split(','), machine.typeMachine === 'Moore')
      const rows = generateRows(columns, machine.amountOfStates)
      setDataTable({ ...dataTable, columns, rows })
      return true
    }
    return false
  }

  return (
    <SnackbarProvider>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 } }}>
        <Container>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: 2, mb: 4 }}>
            <Typography sx={{ typography: { xs: 'body1', sm: 'h6', md: 'h4' } }}>Autómata conexo y mínimo equivalente</Typography>
            <AButton dataTable={dataTable}/>
          </Box>

          <Grid container spacing={2} sx={{ alignItems: 'center', mb: 8 }}>

            <Grid item xs={12} md={6}>
              <Alert severity="info" sx={{ mb: 2 }}>
                <AlertTitle>Información</AlertTitle>
                Verificar el documento de casos de usos en el repositorio con el <strong>modelo</strong> necesario para las maquinas de estado finito.
              </Alert>
            </Grid>

            <Grid item xs={12} md={6}>
              <ASelect name={'typeMachine'} machine={machine.typeMachine} handleChange={handleFieldChange}></ASelect>
            </Grid>

            <Grid item xs={12} md={6}>
              <ATextField name={'alphabet'} label='Alfabeto' finite={machine.alphabet} handleChange={handleFieldChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <ATextField name={'amountOfStates'} type={'number'} label='Cantidad de Estados' finite={machine.amountOfStates} handleChange={handleFieldChange} />
            </Grid>

            <Grid item xs={12} sx={{ height: '300px' }}>
              {open && (
                <>
                  <Typography variant='h5' sx={{ mb: 2 }}>{`${machine.typeMachine} Machine Table`}</Typography>
                  <DataGrid rows={dataTable.rows} columns={dataTable.columns} processRowUpdate={processRowUpdate} experimentalFeatures={{ newEditingApi: true }} />
                </>
              )}
            </Grid>

          </Grid>

          <Typography variant='h5' sx={{ mb: 2 }}>Machine Diagram</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {/*  <Graphviz
            dot={`
              digraph {
                a -> b[label="0.2",weight="0.2"];
                a -> c[label="0.4",weight="0.4"];
                c -> b[label="0.6",weight="0.6"];
                c -> e[label="0.6",weight="0.6"];
                e -> e[label="0.1",weight="0.1"];
                e -> b[label="0.7",weight="0.7"];
            }
          `}
          /> */}
          </Box>

        </Container>
      </Box>

    </SnackbarProvider>
  );
}

export default App;
