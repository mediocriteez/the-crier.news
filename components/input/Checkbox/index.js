const Checkbox = ({labelText, name, checked, setValue}) => {

        const onChange = e => {
            const {currentTarget: {checked}} = e
            setValue(checked)
        }

    return(
        <label>
            <span>{labelText}</span>
            <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
        </label>
    )
}

export default Checkbox