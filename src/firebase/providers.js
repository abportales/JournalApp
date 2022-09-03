import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

//nueva instancia de esta función
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    //como esta autentificación puede fallar, la pondremos entre un try/catch
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({ credentials })

        // console.log(user) para ver q deses
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}


//nuevo provedor pero con usuario y password.
export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // console.log(resp)
        // TODO: actualizar el displayName en firebase
        // promise avoid, una promesa que no regresa nada.
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName,
        }
    } catch (error) {
        // console.log(error);
        // en esta parte llevaría la validación de errores por parte de firebase,
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName,
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}