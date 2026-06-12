"use client"

import { useCallback, useMemo, useRef, useState } from 'react'
import css from './index.module.css'
import { useCheckoutContext } from '@/components/context/Checkout'
import { usePathname, useRouter } from 'next/navigation'

const DonateForm = ({}) => {

    const {normalizeDonationAmount, setReturnTo} = useCheckoutContext()
    const [donationAmount, setDonationAmount] = useState('1')
    const [customDonationAmount, setCustomDonationAmount] = useState('')
    
    const router = useRouter()
    const pathName = usePathname()

    const onSubmit = useCallback(e => {
        e.preventDefault()
        const amount = donationAmount === 'CUSTOM' ? customDonationAmount : donationAmount
        normalizeDonationAmount(amount)
        router.push('/donate')
        setReturnTo(pathName)
    }, [donationAmount, customDonationAmount])

    const radioOnInput = useCallback(e => {
        setDonationAmount(e.currentTarget.value)
    }, [])

    const inputOnChange = useCallback(e => {
        const {value} = e.currentTarget
        const [int, frac] = value.split('.')

        let setValue
        if(frac == undefined){
            setValue = int
        }else{
            setValue = `${int}.${frac.slice(0, 2)}`
        }

        setCustomDonationAmount(setValue)
    }, [])

    const inputOnFocus = useCallback(e => {
        setDonationAmount('CUSTOM')
    }, [donationAmount])

    const inputOnBlur = useCallback(e => {
        const {currentTarget:input} = e

        if(input.value === '') return

        setCustomDonationAmount(parseFloat(input.value).toFixed(2))
    }, [])

    return(
        <div className={css.root}>
            <h2>Donate</h2>
            <form onSubmit={onSubmit}>
                {
                    [1, 5, 10].map(v => {
                        return(
                            <label key={v} data-selected={`${v}` === donationAmount}>
                                ${v}
                                <input 
                                    type="radio" 
                                    name="donation_amount" 
                                    value={v} 
                                    checked={`${v}` === donationAmount} 
                                    onChange={radioOnInput}
                                />
                            </label>
                        )
                    })
                }
                <label data-selected={donationAmount === 'CUSTOM'}>
                    $
                    <input 
                        type="number" 
                        name="donation_amount_custom"
                        value={customDonationAmount} 
                        placeholder="Other" 
                        onChange={inputOnChange}
                        onFocus={inputOnFocus}
                        onBlur={inputOnBlur}
                    />
                </label>
                <button type="submit">Checkout</button>
            </form>
        </div>
    )
}

export default DonateForm