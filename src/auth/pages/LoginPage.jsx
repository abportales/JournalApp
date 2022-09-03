import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

export const LoginPage = () => {
  // si queremos obtener una propiedad especifica del status declaramos el selector.
  // control de errores de la respuesta de firebase (errorMessage)
  const { status, errorMessage } = useSelector(state => state.auth)
  //hacemos esto para controlar el status, si no cambia no hara nada, cuando cambie hara la acción.
  // y lo usaremos en los botones del login y google
  // console.log({status})
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch();

  //este form no saldra de aqui, no tiene caso mandarlo a redux
  const { email, password, onInputChange } = useForm({
    email: 'portales.ab@gmail.com',
    password: '123456',
  })


  //verificación del email and password
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password })
    //hacer dispatch de nuestro thunk (startlogin)
    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const OnGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
    // console.log('onGoogleSignIn')
  }

  // xs tamaño de la caja
  // sx styled eXtend
  return (

    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        {/* grid tambien cuenta con la plantilla de 12 posiciones como bootstrap */}
        <Grid
          container
        // direction="column"
        // spacing={1}
        >
          {/* lo de arriba es una opcion mia, la otra es de Fer 
             <Grid item xs={12} sx={{ mt: 2 }}*/}
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@google.com"
              //parte del useform
              name='email'
              value={email}
              onChange={onInputChange}
              fullWidth />
          </Grid>
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              //parte del useform
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth />
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid
            item
            display={!!errorMessage ? '' : 'none'} //errorMessage, es nulo, con doble negación se hace booleano.
            xs={12}>
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              type="submit" //useForm
              disabled={isAuthenticating}
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              onClick={OnGoogleSignIn}
              disabled={isAuthenticating}
              fullWidth>
              <Google /> <Typography sx={{ ml: 1 }}> Google </Typography>
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
            {/* primero el link de material */}
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear Cuenta
            </Link>
          </Grid>

        </Grid>

      </form>
    </AuthLayout>
  )
}
