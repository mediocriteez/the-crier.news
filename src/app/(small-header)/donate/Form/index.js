"use client"

import { useCheckoutContext } from "@/components/context/Checkout"
import FormCheckbox from "@/components/input/FormCheckbox"
import FormTextInput from "@/components/input/FormText"
import { useCallback, useEffect, useState } from "react"
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import CountryCodeSelect from "./CountryCodeSelect"
import ErrorLabel from "@/components/input/ErrorLabel"
import StripeForm from "./StripeForm"



const DonateForm = ({step}) => {

    const {
        stripeClientSecret,
        donationAmount, setDonationAmount,
        donationError,
        updateDonationAmount,
        donatorData, setDonatorData, donatorDataErrors, 
        checkout
    } = useCheckoutContext()

    const [editing, setEditing] = useState(false)
    

    const editDonationAmount = useCallback(e => {
        const {currentTarget: { value }} = e
        setDonationAmount(value)
    }, [])

    const toggleEditing = useCallback(e => {
        const {currentTarget: { checked }} = e
        console.log(checked)
        setEditing(checked)
        if(!checked) updateDonationAmount()
    }, [updateDonationAmount])

    return(
        <main>
            <h1>Checkout</h1>
            <form>  
                <ErrorLabel error={donationError}>
                    <span>donation amount</span>
                    $<input 
                        name="donationAmount" 
                        type="number" 
                        value={donationAmount} 
                        onChange={editDonationAmount}
                        readOnly={!editing}
                        />
                </ErrorLabel>
                <label>
                    {!editing ? 'edit amount' : 'save'}
                    <input name="edit-donation-amount" type="checkbox" onChange={toggleEditing}/>
                </label>              
            </form>
            <p>* the-crier.news is a hobby project and not a non-profit organization. Your donation is not tax deductible.</p>
            <form>
                <fieldset disabled={step !== 1}>
                    <div>
                        <ErrorLabel text={"First Name*"} error={donatorDataErrors?.first_name}>
                            <FormTextInput name="first_name" value={donatorData} setValue={setDonatorData}  />
                        </ErrorLabel>
                        <ErrorLabel text={"Last Name*"} error={donatorDataErrors?.last_name}>
                            <FormTextInput name="last_name" value={donatorData} setValue={setDonatorData}  />
                        </ErrorLabel>
                    </div>
                    <div>
                        <ErrorLabel text={"E-mail Address*"} error={donatorDataErrors?.email}>
                            <FormTextInput name="email" value={donatorData} setValue={setDonatorData} type="email"/>
                        </ErrorLabel>
                    </div>
                    <div>
                        <ErrorLabel text={"Country Code"}>
                            <CountryCodeSelect name="phone_country_code" value={donatorData} setValue={setDonatorData} />
                        </ErrorLabel>
                        <ErrorLabel text={"Phone Number"} error={donatorDataErrors?.phone}>
                            <FormTextInput name="phone" value={donatorData} setValue={setDonatorData}/>
                        </ErrorLabel>
                    </div>
                    <div>
                        <ErrorLabel text={"Subscribe to e-mail notifications?"} error={donatorDataErrors?.email_updates}>
                            <FormCheckbox name="email_updates" value={donatorData} setValue={setDonatorData}/>
                        </ErrorLabel>
                        <ErrorLabel text={"Subscribe to text message notifications"} error={donatorDataErrors?.text_updates}>
                            <FormCheckbox name="text_updates" value={donatorData} setValue={setDonatorData}/>
                        </ErrorLabel>
                    </div>
                </fieldset>
            </form>
            <button onClick={checkout}>next</button>
            <button onClick={() => console.log(donationAmount)}>log donation amount</button>
            <button onClick={() => console.log(donatorData)}>log donator data</button>
            {step === 2 &&
                <fieldset disabled={step !== 2}>
                    <StripeForm clientSecret={stripeClientSecret} />
                </fieldset>
            }
        </main>
    )
}

export default DonateForm