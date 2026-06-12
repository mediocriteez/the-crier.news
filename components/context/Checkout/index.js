"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useCheckoutRecord, useDonationAmount, useDonatorData, useStripePaymentIntent } from "./hooks"
import { createCheckoutRecord, updateCheckoutRecord } from "./actions"
import z from "zod"
import { useRouter } from "next/navigation"
import { parsePhoneNumberWithError } from "libphonenumber-js"

const CheckoutContext = createContext()

const CheckoutContextProvider = ({children}) => {

    const router = useRouter()

    const [fetchCheckoutID, updateCheckoutRecord] = useCheckoutRecord()
    const [donationAmount, setDonationAmount, normalizeDonationAmount] = useDonationAmount('1.00')
    const [donationError, setDonationError] = useState('')
    const [stripePaymentIntent, fetchStripePaymentIntent, updateStripePaymentIntent] = useStripePaymentIntent() 
    const stripeClientSecret = useMemo(() => stripePaymentIntent?.client_secret || null, [stripePaymentIntent])
    const [donatorData, setDonatorData, updateDonatorRecord] = useDonatorData()
    const [donatorDataErrors, setDonatorDataErrors] = useState({})
    const [returnTo, setReturnTo] = useState(null)

    const validateDonationAmount = useCallback(() => {
        const amount = parseInt(donationAmount) * 100
        const valid = amount >= 100

        if(!valid) setDonationError('$1.00 minimum donation')

        return valid
    }, [donationAmount])

    const validateDonatorData = useCallback(() => {
        console.log('validating donor data')
        const validator = z.object({
            first_name: z.string().trim().min(1, {message: 'Required'}),
            last_name: z.string().min(1, {message: 'Required'}),
            email: z.email(),
            phone_country_code: z.string().or(z.literal("")),
            phone: z.string().or(z.literal("")),
            email_updates: z.boolean(),
            text_updates: z.boolean()
        }).refine((data) => {

            if(data.phone === '') return true

            const [country, calling] = data.phone_country_code.split(' ')

            try {
                parsePhoneNumberWithError(`${calling}${data.phone}`, country)
                return true
            } catch (error) {
                console.error(error)
                return false
            }
        }, {
            message: "Invalid phone number",
            path: ["phone"], 
        });

        // console.log(validator)

        const result = validator.safeParse(donatorData)

        console.log('at validate donator data', result)

        const {
            success,
            error
        } = result

        // console.log(z.flattenError(error))

        if(!success) setDonatorDataErrors((() => {
            const {fieldErrors} = z.flattenError(error)

            const errors = {}

            for(const field in fieldErrors){
                errors[field] = fieldErrors[field]
            }

            return errors
        })())
            
        return success

    }, [donatorData])

    const updateDonationAmount = useCallback(async () => {

        let amount = normalizeDonationAmount()
        console.log(amount)
        amount = parseFloat(amount) * 100

        if(!validateDonationAmount()) return

        try {
            const result = await updateStripePaymentIntent({amount})
            console.log(result)
        } catch (error) {
            
        }

        await updateCheckoutRecord({amount})
    }, [donationAmount])

    //helper function for the component. abstracts parameter passing into a simple function call.
    const fetchClientSecret = useCallback(() => fetchStripePaymentIntent(donationAmount), [donationAmount])
    
    const init = useCallback(async () => {
        
        const amount = parseFloat(normalizeDonationAmount()) * 100

        if(!validateDonationAmount()) return

        const paymentIntent = await fetchStripePaymentIntent(amount)
        const {id:paymentIntentID} = paymentIntent

        const donatorID = await updateDonatorRecord()

        fetchCheckoutID({amount, payment_intent: paymentIntentID, donator: donatorID})
        
    }, [donationAmount])

    const refresh = useCallback(async () => {
        updateDonationAmount()
    }, [donationAmount])

    const checkout = useCallback(() => {
        setDonatorDataErrors({})
        router.push('/donate/checkout')
    }, [donationAmount, validateDonatorData])

    return(
        <CheckoutContext.Provider 
            value={{
                donationAmount, setDonationAmount, normalizeDonationAmount,
                donationError,
                updateDonationAmount, validateDonationAmount,
                donatorData, setDonatorData, updateDonatorRecord,
                donatorDataErrors, setDonatorDataErrors, validateDonatorData,
                stripeClientSecret, fetchClientSecret,
                init, refresh, checkout,
                updateCheckoutRecord,
                returnTo, setReturnTo
            }} 
        >
            {children}
        </CheckoutContext.Provider>
    )
}

const useCheckoutContext = () => useContext(CheckoutContext)

export {useCheckoutContext}
export default CheckoutContextProvider