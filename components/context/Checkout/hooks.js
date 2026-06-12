import { useReducer, useRef, useState } from "react"
import { createCheckoutRecord, createDonator, createPaymentIntent, updateCheckoutRecord, updateDonator, updatePaymentIntent } from "./actions"
import { id } from "zod/locales"

const useDonationAmount = (amount = '1.00') => {
    const [donationAmount, setDonationAmount] = useState(amount)
    const normalizeDonationAmount = (amount = false) => {
        console.log(donationAmount, 'at useDontationHook before execution')
        const normalizedAmount = amount !== false ? parseFloat(amount).toFixed(2) : parseFloat(donationAmount).toFixed(2)
        setDonationAmount(normalizedAmount)
        return normalizedAmount
    }
    return [donationAmount, setDonationAmount, normalizeDonationAmount]
}

const useDonatorData = () => {
    const [donatorID, setDonatorID] = useState(null) 
    const [donatorData, setDonatorData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_country_code: 'US +1',
        phone: '',
        email_updates: false,
        text_updates: false
    })

    const updateDonatorRecord = async (data) => {
        const id = await updateDonator(donatorID, data)
        if(id !== null) setDonatorID(id)
    }

    return [donatorData, setDonatorData, updateDonatorRecord]
}

const useCheckoutRecord = () => {
    const [checkoutID, setCheckoutID] = useState(null)

    const createRecord = async (data) => {
        const id = await createCheckoutRecord(data)
        setCheckoutID(id)
        return id
    }

    const updateRecord = (data) => updateCheckoutRecord(checkoutID, data)

    return [createRecord, updateRecord]
}

const useStripePaymentIntent = () => {
    const [paymentIntent, setPaymentIntent] = useState(null)

    const fetchIntent = async amount => {
        const paymentIntent = await createPaymentIntent(amount)
        setPaymentIntent(paymentIntent)
        return paymentIntent
    }

    const updateIntent = async data => {
        updatePaymentIntent(paymentIntent.id, data)
    }

    return [paymentIntent, fetchIntent, updateIntent]
}

export {useCheckoutRecord, useDonationAmount, useStripePaymentIntent, useDonatorData}