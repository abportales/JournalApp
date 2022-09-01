import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
        const {uid, photoURL} = resp.user;
        // console.log(resp)
        // TODO: actualizar el displayName en firebase
        return {
            ok: true,
            uid, photoURL,email, displayName,
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}