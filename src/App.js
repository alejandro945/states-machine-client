import * as React from 'react';
import { Box, Grid, Typography, Alert, AlertTitle, Button } from '@mui/material';
import ASelect from './components/ASelect';
import ATextField from './components/ATextField';
import Graphviz from 'graphviz-react';
//import axios from 'axios'

function App() {
  const [machine, setMachine] = React.useState({
    typeMachine: '',
    machineData: ''
  });
  const handleSelectChange = (event) => {
    setMachine({ ...machine, typeMachine: event.target.value });
  };
  const handleTextFieldChange = (event) => {
    setMachine({ ...machine, machineData: event.target.value });
  };
  const handleSubmit = () =>{
    //Capa de validación
    //axios.get('http://machineserver.d69fa166303d4cf4b8b6.eastus.aksapp.io/api/nodes')
    //Llamado al adaptador y cambio en estado 
    //JSON.parse(JSON.stringify(result.data))
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 } }}>
      <Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', mt: 2, mb:4 }}>
          <Typography sx={{ typography: { xs: 'body1', sm: 'h6', md: 'h4' } }}>Autómata conexo y mínimo equivalente</Typography>
          <Button onClick={handleSubmit} variant='contained' color='error' size='small' sx={{ textTransform: 'capitalize' }}>Enviar</Button>
        </Box>

        <Grid container spacing={2} sx={{ alignItems: 'center', mb: 2 }}>

          <Grid item xs={12} md={6}>
            <Alert severity="info" sx={{ mb: 2 }}>
              <AlertTitle>Información</AlertTitle>
              Verificar el documento de casos de usos en el repositorio con el <strong>modelo</strong> necesario para las maquinas de estado finito.
            </Alert>
          </Grid>

          <Grid item xs={12} md={6}>
            <ASelect machine={machine.typeMachine} handleChange={handleSelectChange}></ASelect>
          </Grid>

          <Grid item xs={12}>
            <ATextField finite={machine.machineData} handleChange={handleTextFieldChange} />
          </Grid>

        </Grid>

        <Typography variant='h5' sx={{mb:2}}>Machine Diagram</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Graphviz
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
          />
        </Box>

      </Box>
    </Box>
  );
}

export default App;
