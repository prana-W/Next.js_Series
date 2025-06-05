export default async function ProductReview({params}: {
    params: Promise<{
        productId: string;
        reviewId: string
    }>
}) {
    const {productId, reviewId} = await params;
    return (
        <div>
            <h1>Product Reviews</h1>
            <p>Review {reviewId} for product {productId}</p>
        </div>
    )
}