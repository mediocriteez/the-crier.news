const TextInput = ({labelText, name, value, setValue, type="text"}) => {

    const onChange = e => {
        const {currentTarget: {value}} = e

        setValue(value)
    }

    return(
        <label>
            <span>{labelText}</span>
            <input type={type} name={name} value={value} onChange={onChange}/>
        </label>
    )
}

export default TextInput