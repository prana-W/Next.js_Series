import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>This is Home page</h1>
            <Link href="/blog">Blog</Link>
            <br/>
            <Link href="/products">Products</Link>
            <br/>
            <Link href="/articles/breaking-news?lang=en">Read in English</Link>
            {/* Here breaking-news is the dynamic parameter while lang=en is the query parameter*/}
            <br/>
            <Link href="/articles/breaking-news?lang=fr">Read in French</Link>
            <br/>
            <Link href="/articles2/breaking-news?lang=en">Read in English part2</Link>
            <br/>
            <Link href="/articles2/breaking-news?lang=fr">Read in French part2</Link>

        </>
    )
}