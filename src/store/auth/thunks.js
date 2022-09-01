import { registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

//ponemos start para determinar que es una tarea asíncrona
export const startGoogleSignIn = () => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result = await signInWithGoogle()
        // console.log({result})
        //el usuario cancelo el inicio o hubo error, lo retorna.
        if (!result.ok) return dispatch(logout(result.errorMessage));
        // no hubo errores y ahora hará el login correctamente.
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const resp = await registerUserWithEmailAndPassword({ email, password, displayName })
        console.log(resp)
    }
}