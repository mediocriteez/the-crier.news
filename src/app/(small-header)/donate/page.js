"use client"

import { useCheckoutContext } from "@/components/context/Checkout"
import DonateForm from "./Form"
import { useEffect } from "react"

const Page = () => {

    const {init, refresh, stripeClientSecret} =  useCheckoutContext()

    useEffect(() => {
        if(stripeClientSecret !== null){
            console.log('refreshing')
            refresh()
        }else{
            console.log('initializing')
            init()
        }
    }, [])

    return <DonateForm step={1} />
}

export default Page