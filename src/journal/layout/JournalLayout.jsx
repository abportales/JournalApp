import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";

// se buscara enviar estos valores para poder jugar con los bar
const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        // es como un div
        <Box sx={{ display: 'flex' }}
            className='animate__animated animate__fadeIn animated__faster'>

            <NavBar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
