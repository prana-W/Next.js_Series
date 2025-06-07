import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>
}

// exactly with the same name
export const generateMetadata = async (
    {params}: Props
): Promise<Metadata> => {
    const id = (await params).productId;

    return {
        title: `Product ${id}`
    }
}

export default async function ProductDetails({params}: Props) {

    const productId = (await params).productId;

    return (
        <div>
            <h1>Product Details</h1>
            <p>This page will display details for {productId}</p>
        </div>
    )
}

