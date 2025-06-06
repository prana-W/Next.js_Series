"use client";
import {usePathname} from "next/navigation";

// we want to use pathName, but can't pass props directly in the NotFound component

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];

    return (
        <div>
            <h1>Product {productId} Review {reviewId} Not Found</h1>
            <p>We couldn't find the review you were looking for.</p>
        </div>
    )
}