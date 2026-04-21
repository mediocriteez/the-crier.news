import Checkbox from "../Checkbox"

const FormCheckbox = ({name, checked, setValue, ...props}) => {

    const setFormValue = value => setValue(prev => ({...prev, [name]: value}))

    return(
        <Checkbox checked={checked[name]} setValue={setFormValue} {...props}/>
    )
}

export default FormCheckbox