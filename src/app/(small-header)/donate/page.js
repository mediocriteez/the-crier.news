"use client"

import FormTextInput from "@/components/input/FormText"
import { useCallback, useEffect, useState } from "react"

const Donate = () => {
    const [donationAmount, setDonationAmount] = useState('1.00')
    const [editing, setEditing] = useState(false)
    const [donatorData, setDonatorData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    useEffect(() => {
        if(editing === false) return
    }, [editing])

    const editDonationAmount = useCallback(e => {
        const {currentTarget: { value }} = e
        setDonationAmount(value)
    }, [])

    const toggleEditing = useCallback(e => {
        const {currentTarget: { checked }} = e
        setEditing(checked)
        if(!checked) setDonationAmount(prev => parseFloat(prev).toFixed(2))
    }, [])

    return(
        <main>
            <h1>Checkout</h1>
            <form>
                <label>
                    <span>donation amount</span>
                    $<input 
                        name="donationAmount" 
                        type="number" 
                        value={donationAmount} 
                        onChange={editDonationAmount}
                        readOnly={!editing}
                    />
                </label>
                <label>
                    {!editing ? 'edit amount' : 'save'}
                    <input name="edit-donation-amount" type="checkbox" onChange={toggleEditing}/>
                </label>              
            </form>
            <p>* the-crier.news is a hobby project and not a non-profit organization. Your donation is not tax deductible.</p>
            <form>
                <div>
                    <FormTextInput labelText="First Name" name="firstName" value={donatorData} setValue={setDonatorData}  />
                    <FormTextInput labelText="Last Name" name="lastName" value={donatorData} setValue={setDonatorData}  />
                </div>
                <FormTextInput labelText="E-mail Address" name="email" value={donatorData} setValue={setDonatorData} type="email"/>
                <FormTextInput labelText="Phone Number" name="phone" value={donatorData} setValue={setDonatorData}/>
                <div>
                    
                </div>
            </form>
        </main>
    )
}

export default Donate