"use client";

import {useRouter} from 'next/navigation';

export default function OrderFunction() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Placing order...")
        // router.push("/")
        router.replace("/") // This navigates to the given route and replaces the current entry in the history stack. Similar to using replace prop in a Link component.
        // router.back()
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}