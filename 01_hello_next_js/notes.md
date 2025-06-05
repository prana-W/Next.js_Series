# Steps

- Install the next.js app

## Important Concepts

### RSC

- React Server Components (RSC): It is an architecture that allows us to create React Components, which can be divided into two types: Server Components and Client Components. Server Components are rendered on the server, while Client Components are rendered on the client side.
- By default, all components in Next.js are Server Components. 
- These can perform server-side operations like fetching data from a database, accessing the file system, and more.
- The trade off is that they can't use React Hooks and handle user interactions. 
- To use Client Components, we need to explicitly mark them as such by adding the `"use client"` directive at the top of the file.
- Can't perform server-side operations like fetching data from a database, accessing the file system, and more, but can handle hooks and user interactions.
- These are the traditional React components that we are used to.

### Routing

- Next.js uses a file-based routing system.
- Routing Conventions
    - All routes are defined in the `app` directory, within the `src` directory.
    - Route files must be named `page.js` or `page.tsx`.
    - Each folder represents segment of the URL path.
    - When all these conventions are followed, Next.js automatically creates the routes for us. 
- `Layout.tsx` is created automatically by Next.js.
### Nested Routing
- Next.js supports nested routing, which allows us to create routes within routes.
### Dynamic Routing 
- Dynamic routing allows us to create routes that can change based on the data.
### Catch-All Segments and Optional Catch-All Segments
