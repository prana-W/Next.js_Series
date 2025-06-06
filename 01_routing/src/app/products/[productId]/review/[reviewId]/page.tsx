import {notFound} from "next/navigation"; //this will be the global not-found page, we can also add it to this directory, to get a more customized not-found page

export default async function ProductReview({params}: {
    params: Promise<{
        productId: string;
        reviewId: string
    }>
}) {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId) > 1000) {
        notFound() // uses the closest not-found page
    }
    return (
        <div>
            <h1>Product Reviews</h1>
            <p>Review {reviewId} for product {productId}</p>
        </div>
    )
}