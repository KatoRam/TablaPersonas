import { Button, SelectChangeEvent, Grid } from '@mui/material'
import { Form, TextFieldInput, DatePickerInput, SelectInput, RadioGroupInput, Wait, TextFieldNumber } from '../components/forms'
import IPersona from '../types/IPersona';
import personaService from '../services/PersonaService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function FormPersona() {
  const navigate = useNavigate();
  const { personaId } = useParams();
  const [personaData, setPersonaData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (personaId) {
      setIsLoading(true);
      personaService.get(personaId).then((response) => {
        setPersonaData(response.data ?? []);
        setIsLoading(false);
      }
      );
    }
  }, []);


  const onSubmit = (data: IPersona) => {
    setIsLoading(true);
    personaService.create(data);
    navigate(-1);
  }

  const handleOnclickCancelar = () => {
    navigate(-1);
  }


  const options = [
    { value: 1, label: "ola" },
    { value: 2, label: "pez" },
    { value: 3, label: "si" }
  ]

  const radioOptions = [
    { value: "Hombre", label: "Hombre" },
    { value: "Mujer", label: "Mujer" },
    { value: "Otros", label: "Otros" }
  ]

  const onChange = (event: SelectChangeEvent) => {
    console.log(event.target.value)
  }

  return (
    <>
      <h2>Agregar Personas</h2>
      <Wait isLoading={isLoading}>
        <Form onSubmit={onSubmit} defaultValue={personaData} >

          <Grid container spacing={4} columns={1}>

            <Grid item xs={8}>
              <TextFieldInput nombre='nombre' label='Nombre' />
            </Grid>

            <Grid item xs={8}>
              <TextFieldInput nombre='apellido' label='Apellido' />
            </Grid>

            <Grid item xs={8}>
              <TextFieldInput nombre='correo' label='Correo' />
            </Grid>

            <Grid item xs={8}>
              <TextFieldNumber nombre='edad' label='Edad'  />
            </Grid>

            <Grid item xs={8}>
              <DatePickerInput nombre='fecha' label='Fecha' />
            </Grid>

            <Grid item xs={8}>
              <RadioGroupInput nombre='genero' label='Genero' defaultValue='female' radioOptions={radioOptions} />
            </Grid>

            <Button type='submit'>Enviar</Button>
            <Button onClick={handleOnclickCancelar} type='button'>Cancelar</Button>
          </Grid>
        </Form>
      </Wait>
    </>
  )
}

