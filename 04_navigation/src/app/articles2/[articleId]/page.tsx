'use client'

import Link from 'next/link';
import {use} from "react";

//! Visit /articles2

// We destructure params and searchParams from the props and assign a type to them.
export default function NewsArticlePage({params, searchParams} : {
    params: Promise<{articleId: string}>,
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>,
}) {

    const  {articleId} = use(params);
    const {lang = "en"} = use(searchParams);

    return (
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href={`/articles2/${articleId}?lang=en`}>English</Link>
                <br/>
                <Link href={`/articles2/${articleId}?lang=es`}>Spanish</Link>
                <br/>
                <Link href={`/articles2/${articleId}?lang=fr`}>French</Link>
            </div>

        </div>
    )
}