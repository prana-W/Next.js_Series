import {notFound} from 'next/navigation'
export default async function ProductDetails({params}: {
    params: Promise<{
        productId: string
        // this will have the name of our folder
    }>
}) {
    const productId = (await params).productId;
    if (parseInt(productId) > 1000) {
        notFound() // this will redirect to the local not-found page
    }
    return (
        <div>
            <p>This page will display details for {productId}</p>
        </div>
    )
}

// The name of the folder containing dynamic routes is wrapped in square brackets.
// Every page in the app router receives route parameters through the params prop.
// The type of params is a promise, which resolves to an object containing dynamic segments as key-value pairs.
// Good thing about server component is that we can use async/await syntax to handle the promise.