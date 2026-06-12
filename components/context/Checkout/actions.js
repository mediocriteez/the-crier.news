"use server"

import stripe from "@/services/stripe/createService"
import { supabase } from "@/services/supabase/createClient"
import { supabaseService } from "@/services/supabase/createService"

const createCheckoutRecord = async (data) => {

    'use server'

    const permissableColumns = ['amount', 'payment_intent']

    const dataKeys = Object.keys(data)
    const permissableDataKeys = dataKeys.filter(d => permissableColumns.includes(d))
    
    const insertData = {}

    for (const key of permissableDataKeys){
        insertData[key] = data[key]
    }

    let checkoutID

    try {
        const {data, error} = await supabaseService.from('checkout_session').insert(insertData).select('id').single()
        if(error) throw error

        checkoutID = data.id
    } catch (error) {
        console.error(error)
    }

    return checkoutID
}

const updateCheckoutRecord = async (checkoutID, data = {}) => {
    'use server'

    const permissableColumns = ['amount', 'payment_intent']

    const dataKeys = Object.keys(data)
    const permissableDataKeys = dataKeys.filter(d => permissableColumns.includes(d))
    
    const updateData = {}

    for (const key of permissableDataKeys){
        updateData[key] = data[key]
    }

    // console.log(updateData, 'at update checkout record', checkoutID)

    try {
        
        const {error} = await supabaseService.from('checkout_session').update(updateData).eq('id', checkoutID)
        if(error) throw error

    } catch (error) {
        console.error(error)
        console.error(error?.message)
    }


}

const createPaymentIntent = async(amount) => {
    'use server'
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
            allow_redirects: 'never'
        },
    });

    const {
        id,
        amount:paymentIntentAmount,
        client_secret
    } = paymentIntent

    return {id, amount: paymentIntentAmount, client_secret}
}

const updatePaymentIntent = async(id, data) => {
    'use server'

    const permissableColumns = ['amount']

    const dataKeys = Object.keys(data)
    const permissableDataKeys = dataKeys.filter(d => permissableColumns.includes(d))
    
    const updateData = {}

    for (const key of permissableDataKeys){
        updateData[key] = data[key]
    }
    // console.log(updateData, 'at update payment intent')
    // updateData.return_url === 'https://the-crier.news/donate'
    try {
        const result = await stripe.paymentIntents.update(
            id,
            updateData
        )
    } catch (error) {
        console.error(error)
    }
}

const createDonator = async () => {

}

const updateDonator = async (id, data = {}) => {
    'use server'

    const permissableColumns = ['email', 'phone', 'phone_country_code', 'first_name', 'last_name', 'email_updates', 'text_updates']

    const dataKeys = Object.keys(data)
    const permissableDataKeys = dataKeys.filter(d => permissableColumns.includes(d))
    
    const updateData = {}

    for (const key of permissableDataKeys){
        updateData[key] = data[key]
    }

    if(id !== null) updateData.id = id

    console.log(updateData)

    try {
        const query = supabaseService.from('donor').upsert(updateData)
        if(id === null) query.select('id').single()
        const {data, error} = await query
        if(error) throw error

        return data?.id || null
    } catch (error) {
        console.error(error)
    }
}

export {createCheckoutRecord, createPaymentIntent, updateCheckoutRecord, updatePaymentIntent, createDonator, updateDonator}