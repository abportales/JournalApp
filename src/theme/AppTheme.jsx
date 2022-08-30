import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"

export const AppTheme = ({ children }) => {
    // recordemos que al hacer children, este pasa a ser un high order component
    // y recibira un componente hijo, para ubicarlo dentro de este oto componente.
    return (
        <>
            <ThemeProvider theme={purpleTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    )
}
