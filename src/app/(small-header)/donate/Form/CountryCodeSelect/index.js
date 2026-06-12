import FormSelect from "@/components/input/FormSelect"
import { getCountries, getCountryCallingCode } from "libphonenumber-js"

const CountryCodeSelect = ({name, value, setValue}) => {

    const options = getCountries().map(c => ({country: c, calling: getCountryCallingCode(c)}))
    // console.log(options, 'calling codes')

    return(
        <FormSelect name={name} value={value} setValue={setValue}>
            {options.map(c => {

                const text = `${c.country} +${c.calling}`

                return(
                    <option key={text} value={text}>{text}</option>
                )
            })}
        </FormSelect>
    )
}

export default CountryCodeSelect