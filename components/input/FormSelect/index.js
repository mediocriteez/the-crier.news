"use client"

import { useCallback } from "react"
import Select from "../Select"

const FormSelect = ({name, value, setValue, ...props}) => {

    const onChange = useCallback((v) => {
        setValue(prev => ({...prev, [name]: v}))
    }, [])

    return(
        <Select name={name} value={value[name]} setValue={onChange} {...props}/>
    )
}

export default FormSelect