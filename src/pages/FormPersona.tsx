import { Button, Grid } from '@mui/material'
import { Form, TextFieldInput, DatePickerInput, RadioGroupInput, Wait, TextFieldNumber } from '../components/forms'
import IPersona from '../types/IPersona';
import personaService from '../services/PersonaService';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

export default function FormPersona() {
  const navigate = useNavigate();
  const { personaId } = useParams();


  const addPersona = useMutation(async (formData: IPersona) => (await personaService.create(formData)).data, {
    onSuccess: () => {
      alert("se guardaron los cambios")
    }
  });
  const updPersona = useMutation(async (formData: IPersona) => (await personaService.update(formData)).data, {
    onSuccess: () => {
      alert("Se actualizaron los cambios")
    }
  });

  const { isLoading, error, data } = useQuery(['updatePersonasById',personaId], async ()=> (await personaService.get(personaId)).data)



  const onSubmit = (data: IPersona) => {
    console.log(data);
    if (data.id) {
      updPersona.mutate(data);
    } else {
      addPersona.mutate(data);
    }
    navigate(-1);
  }

  const handleOnclickCancelar = () => {
    navigate(-1);
  }


  const radioOptions = [
    { value: "Hombre", label: "Hombre" },
    { value: "Mujer", label: "Mujer" },
    { value: "Otros", label: "Otros" }
  ]

  return (
    <>
      <h2>Agregar Personas</h2>
      <Wait isLoading={isLoading}>
        <Form onSubmit={onSubmit} defaultValue={data} >

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
              <TextFieldNumber nombre='edad' label='Edad' />
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

