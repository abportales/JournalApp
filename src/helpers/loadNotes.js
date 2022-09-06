import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe.')

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    // console.log(docs) aqui solo estan las referencias a firebase, si queremos la info tenemos q acceder a la data:
    // pero nos falta el id de cada nota, para saber q usuario la creo, para eso creamos el nuevo arreglo 'notes'
    const notes = []
    docs.forEach(doc => {
        // console.log(doc.data());
        notes.push({ id: doc.id, ...doc.data() });
    })
    // console.log(notes)
    return notes;
}