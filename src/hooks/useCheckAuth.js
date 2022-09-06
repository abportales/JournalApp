import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FirebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

import { login, logout } from '../store/auth'
import { startLoadingNotes } from '../store/journal'

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    //un efecto que verifique si esta en checking
    useEffect(() => {
        //un obsersable, 
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL })) //esta es nuestra función para hacer login.
            dispatch(startLoadingNotes()) //para cargar las notas cuando sabemos que tenemos un usuario
            
        })

    }, [])

    // return {status: status} podemos hacer esto o regresar el objeto directo:
    return status; //asi no deses afuera.
}
