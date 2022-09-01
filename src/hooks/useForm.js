import { useEffect, useMemo, useState } from "react"

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm)
    const [formValidation, setFormValidation] = useState({})

    //cada vez q se cambie algo en el formulario, se dispara el effect
    useEffect(() => {
        createValidators();
    }, [formState])

    //solo deberia cambiar con el formState.
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            //si el objeto formValidation en el valor formValue
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onResetForm = () => {
        setFormState(
            initialForm,
        )
    }

    const createValidators = () => {
        const formCheckedValues = {};
        //basicamente estamos recorriendo el arreglo
        for (const formField of Object.keys(formValidations)) {
            // console.log(formField)
            // opcionalmente podriamos poner errorMessage = 'Este campo es requerido', para no mandar errores
            const [fn, errorMessage] = formValidations[formField];
            // es para crear variables conmutadas, emailValid, displayNameValid, pero tmb con un ternario
            // evalúa si es correcto y si enviara el msg de error o no.
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
        //para aclarar todo lo q hicimos veamos con:
        // console.log(formCheckedValues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        // esparcimos las propiedades q tenga el form validation
        ...formValidation,
        isFormValid,
    }
}

/** si queremos mandar todos los datos que nos estan mandando en el objeto
 * de initialFrom, para evitar hacer:
 * const {username, email, password } = formState
 * 
 * podemos hacer un spread de esas variables, con:
 * ...formState
 */