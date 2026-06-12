const Checkbox = ({name, checked, setValue}) => {

    const onChange = e => {
        const {currentTarget: {checked}} = e
        setValue(checked)
    }

    // console.log('at checkbox', name, checked)

    return(
            <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
    )
}

export default Checkbox