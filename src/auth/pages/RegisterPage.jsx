import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  // xs tamaño de la caja
  // sx styled eXtend
  return (

    <AuthLayout title='Crear cuenta'>
      <form>
        {/* grid tambien cuenta con la plantilla de 12 posiciones como bootstrap */}
        <Grid
          container
        >
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Nombre Completo" type="text" placeholder="Tu Nombre" fullWidth />
          </Grid>
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Correo" type="email" placeholder="email@google.com" fullWidth />
          </Grid>
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant='contained' fullWidth> Crear cuenta </Button>
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
