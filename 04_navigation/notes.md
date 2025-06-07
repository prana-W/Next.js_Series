# Navigation

## Link Tag
- See app/page.tsx and app/products/page.tsx
- Use of replace attribute in Link tag
## Active Links
- See (auth)/layout.tsx

## Params
- Params is a promise in the latest version of Next.js that resolves to an object containing the dynamic parameters of the route (like id)
- See root page.tsx and articles folder
## Search Params
- searchParams is a promise that resolves to an object containing the query parameters of the route (like filters and sorting)
- See root page.tsx and articles folder

*NOTE:*
- See articles2 folder
- We are able to use async-await in the export function only if the page is server-side rendered. 
- If the page is client side renderd, we can't use async-await to access the value of params and searchParams. 
- In that case, we need to use the `use` hook from React and pass params and searchParams as arguments to the hook. 
- This will return a promise that resolves to the value of params and searchParams.

*NOTE:* 
- `page.tsx` has access to both params and searchParams, but `layout.tsx` only has access to params.

