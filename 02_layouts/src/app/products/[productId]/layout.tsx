export default function ProductDetailsLayout(
    {
        children
    } : {
        children: React.ReactNode
    }) {
    return (
        <>
            <h1>Product Details Layout</h1>
            {children}
            <h1>Featured Products</h1>
        </>
    )
}