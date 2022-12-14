import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./ImageGallery"

export const NoteView = () => {
    return (
        // el grid deja mas margen de modificacion y estilos que un box
        <Grid
            className='animate__animated animate__fadeIn animated__faster'
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>28 de agosto 2023</Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    fullWidth
                    multiline
                    placeholder="►¿Qué te sucedió en el día de hoy?"
                    minRows={5}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}
