import TextInput from "../Text"

const FormTextInput = ({name, value, setValue, ...props}) => {

    const setFormValue = value => setValue(prev => ({...prev, [name]: value}))

    return(
        <TextInput name={name} value={value[name]} setValue={setFormValue} {...props}/>
    )
}

export default FormTextInput