import css from './index.module.css'

const TextInput = ({name, value, setValue, type="text", ...props}) => {

    const onChange = e => {
        const {currentTarget: {value}} = e
        setValue(value)
    }

    return(
        <input type={type} name={name} value={value} onChange={onChange} className={css.root} {...props}/>
    )
}

export default TextInput