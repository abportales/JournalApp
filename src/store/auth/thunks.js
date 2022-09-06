import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers"
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
        // console.log(resp)
        const { ok, uid, photoURL, errorMessage } = resp;
        // si lo mandamos asi: logout(errorMessage), estamos diciendo que el payload es el errorMessage,
        // si lo enviamos logout({errorMessage}), es un objeto que tiene un errorMessage, ya depende de la implementación que
        // querramos.
        if (!ok) return dispatch(logout({ errorMessage }));

        // si todo sale bien, logeamos al usuario
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    // internamente llamara a loginwithEmail
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const resp = await loginWithEmailPassword({ email, password });
        const {ok, uid, photoURL, displayName, errorMessage} = resp;

        if (!ok) return dispatch(logout({ errorMessage }));

        // si todo sale bien, logeamos al usuario
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();

        dispatch(logout({}));
    }
}