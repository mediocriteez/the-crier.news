"use client"

import { useCallback } from "react"

const Select = ({name, options, value, setValue, children}) => {

    const onChange = useCallback(e => {
        const {value} = e.currentTarget
        setValue(value)
    }, [])

    return(
        <select name={name} value={value} onChange={onChange}>
            {options?.map?.(o => {
                return(
                    <option value={o} key={o}>{o}</option>
                )
            })}
            {children}
        </select>
    )
}

export default Select