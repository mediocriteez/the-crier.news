import Checkbox from "../Checkbox"

const FormCheckbox = ({name, value, setValue, ...props}) => {

    const setFormValue = value => setValue(prev => ({...prev, [name]: value}))

    // console.log('at form checkbox', name, value[name])

    return(
        <Checkbox name={name} checked={value[name]} setValue={setFormValue} {...props}/>
    )
}

export default FormCheckbox