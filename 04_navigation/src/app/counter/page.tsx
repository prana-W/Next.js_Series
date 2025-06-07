import {Counter} from './counter'

export const metadata = {
    title: "Counter",
    description: "A simple counter application"
}

export default function CounterPage() {
    return (
        <>
            <h1>I am in page.tsx</h1>
            <Counter/></>

    )
}