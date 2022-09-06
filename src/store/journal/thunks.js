import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        //uid
        //con esto obtenemos todo lo q esta en el store, todos los reducers
        // console.log(getState()) vemos que tiene y hacemos la deses
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        //referencia al documento
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);

        // console.log({ newDoc, setDocResp })
        //se crea la propiedad id a la nota con:
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        //para el uid
        const { uid } = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe.')

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}