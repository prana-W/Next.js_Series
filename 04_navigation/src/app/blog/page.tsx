import { Metadata } from "next";

export const metadata = {
title: {
    absolute: 'I am absolute title', // to break free from the template set by the root layout.tsx
}
}

export default function Blog() {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Welcome to my blog! Here you will find articles on various topics.</p>
        </div>
    );
}