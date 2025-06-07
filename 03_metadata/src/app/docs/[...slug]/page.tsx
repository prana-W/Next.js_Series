export default async function Docs({params}: {
    params: Promise<{ slug: string[] }> // array of strings

}) {
    const {slug} = await params;

    if (slug?.length === 2) {
        return <h1>Viewing docs for {slug[0]} and concept {slug[1]}</h1>
    } else if (slug?.length === 1) {
        return <h1>Viewing docs for {slug[0]}!</h1>

    }
    return (
        <div>
            <h1>Documentation</h1>
            <p>Welcome to the documentation page! Here you'll find guides and references for using our application.</p>
        </div>
    )
}

// any url after /docs will be handled by this page
// This is called catch-all segments