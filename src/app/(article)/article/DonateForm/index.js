import { useCallback, useState } from 'react'
import css from './index.module.css'

const DonateCard = ({}) => {

    const [donationAmount, setDonationAmount] = useState(1)
    const [donationCustomAmount, setDonationCustomAmount] = useState('')
    const [isCustom, setIsCustom] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
    }

    const radioOnInput = useCallback(e => {
        setDonationAmount((parseInt(e.currentTarget.value)))
        setDonationCustomAmount('')
    }, [])

    const inputOnChange = useCallback(e => {
        setDonationCustomAmount(e.currentTarget.value)
    }, [])

    return(
        <div className={css.root}>
            <h2>Donate</h2>
            <form onSubmit={onSubmit}>
                {
                    [1, 5, 10].map(v => {
                        return(
                            <label>
                                ${v}
                                <input type="radio" name="donation_amount" value={v} checked={donationCustomAmount === undefined && v === donationAmount} onInput={radioOnInput}/>
                            </label>
                        )
                    })
                }
                <label data-custom={isCustom}>
                    $
                    <input type="text" name="donation_amount_custom" value={donationCustomAmount} placeholder="Other" onChange={inputOnChange}/>
                </label>
                <button type="submit">Checkout</button>
            </form>
        </div>
    )
}

export default DonateCard