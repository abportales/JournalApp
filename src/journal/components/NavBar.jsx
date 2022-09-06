import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        //la haremos en el provider, para no cargar de codigo aqui, aparte es una funcion async.
        // por ese debe de ir en auth y en thunk.
        dispatch(startLogout());
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                // solo en pantallas pequeñas habrá separacion del tamaño enviado
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    // aparecerá el botón cuando la pantalla sea muy pequeña
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                {/* hacer q sus hijos se esparzan */}
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>
                        JournalApp
                    </Typography>

                    <IconButton 
                        color='error'
                        onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>

                </Grid>

            </Toolbar>
        </AppBar>
    )
}
