import Link from 'next/link';

// We destructure params and searchParams from the props and assign a type to them.
export default async function NewsArticlePage({params, searchParams} : {
    params: Promise<{articleId: string}>,
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>,
}) {

    const  {articleId} = await params;
    const {lang = "en"} = await searchParams;

    return (
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <br/>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <br/>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>

        </div>
    )
}