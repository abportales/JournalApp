import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'


const formData = {
  email: 'portales.ab@gmail.com',
  password: '123456',
  displayName: 'Abraham Portales'
  // email: '',
  // password: '',
  // displayName: ''
}

const formValidations = {
  //un arreglo que la primer posición es la evaluacion y el segundo el mensaje
  email: [(value) => value.includes('@'), 'El correo debe ser válido.'],
  password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras.'],
  displayName: [(value) => value.length >= 2, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    // console.log(formState)
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  // xs tamaño de la caja
  // sx styled eXtend
  return (

    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
        {/* grid tambien cuenta con la plantilla de 12 posiciones como bootstrap */}
        <Grid
          container
        >
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu Nombre"
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted} //esto lo convierte en un valor booleano
              helperText={displayNameValid}
              fullWidth />
          </Grid>
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@google.com"
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted} //esto lo convierte en un valor booleano
              helperText={emailValid}
              fullWidth />
          </Grid>
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted} //esto lo convierte en un valor booleano
              helperText={passwordValid}
              fullWidth />
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button
              variant='contained'
              fullWidth
              type="submit"
            >
              Crear cuenta
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
            <Typography>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>

      </form>
    </AuthLayout>
  )
}
