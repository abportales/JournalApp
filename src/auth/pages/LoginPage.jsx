import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  // xs tamaño de la caja
  // sx styled eXtend
  return (

    <AuthLayout title='Login'>
      <form>
        {/* grid tambien cuenta con la plantilla de 12 posiciones como bootstrap */}
        <Grid
          container
        // direction="column"
        // spacing={1}
        >
          {/* lo de arriba es una opcion mia, la otra es de Fer 
             <Grid item xs={12} sx={{ mt: 2 }}*/}
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Correo" type="email" placeholder="email@google.com" fullWidth />
          </Grid>
          < Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Button variant='contained' fullWidth> Login </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant='contained' fullWidth>
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
