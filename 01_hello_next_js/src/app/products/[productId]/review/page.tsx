export default async function Reviews({params}: {
    params: Promise<{
        productId: string
    }>
}) {
    const productId = (await params).productId;
    return (
        <>
            <div>This page contains some reviews for product {productId}:</div>
            <ul>
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
            </ul>
        </>
    )
}