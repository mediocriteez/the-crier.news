"use client"

import { useEffect } from "react"
import DonateForm from "../Form"
import { useCheckoutContext } from "@/components/context/Checkout"
import { useRouter } from "next/navigation"

const Page = () => {

    const router = useRouter()

    const {
        donatorData,
        updateDonatorRecord,
        validateDonatorData,
        validateDonationAmount,
        stripeClientSecret,
        init
    } = useCheckoutContext()

    useEffect(() => {

        const donatorDataValid = validateDonatorData()
        const donationAmountValid = validateDonationAmount()

        if(!donationAmountValid || !donatorDataValid){
            console.log('failed validation')
            router.push('/donate')
            return
        }
        
        if(stripeClientSecret === null){
            init().then(() => updateDonatorRecord(donatorData))
        }else{
            updateDonatorRecord(donatorData)
        }
    }, [])

    return <DonateForm step={2} />
}
export default Page