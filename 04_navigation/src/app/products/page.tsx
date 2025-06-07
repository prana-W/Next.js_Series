import Link from 'next/link';

export default function ProductList() {
    const productId = 101;
    return (
        <>
            <h1>Product List</h1>

            <h2><Link href="/products/1">Product 1</Link></h2>
            <h2><Link href="/products/2">Product 2</Link></h2>
            <h2><Link href="/products/3" replace={true}>Product 3</Link></h2>
            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
        {/*    Replaces the current history state instead of adding a new url to the stack that means Clicking the back button will skip the replaced URL, navigating to the previous entry in the history stack.*/}
        </>
    )
}