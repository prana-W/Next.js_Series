import Link from 'next/link';

export default function ProductList() {

    const productId = 100; // can get from props

    return (
        <>
            <h1>Product List</h1>

            <h2><Link href="/products/1">Product 1</Link></h2>
            <h2><Link href="/products/2">Product 2</Link></h2>
            <h2><Link href="/products/3" replace>Product 3</Link></h2> {/* replace will not add this page to history stack */}

            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>

            <Link href="/">Go Back</Link>
        </>
    )
}