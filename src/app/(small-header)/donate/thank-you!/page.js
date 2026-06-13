"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo } from "react"

const Page = ({}) => {

    const searchParams = useSearchParams() 

    const returnTo = useMemo(() => {
        return searchParams.get('returnto') || null
    },[])

    useEffect(() => {

        if(returnTo === null || returnTo === '' || !searchParams.get('pushhistory')) return

        window.history.pushState({}, '', returnTo);
    }, [])

    return(
        <main>
            <h1>Thank you!</h1>
            <p>We've emailed you a receipt</p>
            <button onClick={() => console.log(returnTo)}>log returnTo</button>
            {returnTo !== null && <><Link href={returnTo}>back to article</Link><br /></>}
            <Link href={'/'}>home</Link>
        </main>
    )
}

export default Page