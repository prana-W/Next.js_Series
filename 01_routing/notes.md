## This contains the notes from 01-

## Important Concepts

- Pages are route-specific UI components.
- Layout is UI that is shared across multiple pages.

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
- A route is only madde if the directory inside the app directory has a page.tsx or page.jsx with a default export function.
- Routing Conventions
    - All routes are defined in the `app` directory, within the `src` directory.
    - Route files must be named `page.js` or `page.tsx`.
    - Each folder represents segment of the URL path.
    - When all these conventions are followed, Next.js automatically creates the routes for us. 
- `Layout.tsx` is created automatically by Next.js.
### Nested Routing
- See blog folder
- Next.js supports nested routing, which allows us to create routes within routes.
### Dynamic Routing 
- See products folder
- Dynamic routing allows us to create routes that can change based on the data.
### Catch-All Segments and Optional Catch-All Segments
- See docs and docs2 fodler respectively
### Custom Error Page
- Next.js allows us to create a custom error page by creating a file named `not-found.js` or `not-found.tsx` in the `app` directory.
- We can also use `notFound()` function by importing it from `next/navigation` to handle not  found errors in our components.
- We can make a global Error page in app directory or a specific error page in a specific route.
- Any route follows the closest error page found, in its directory or else the global error in the app directory.
- NotFound Error Page, doesn't take any props. That's why we have to use usePathname hook to extract the information from the path. 
  - To use this hook, we will need to make our page, client side, as by default all pages are server side, which can't use hooks and user Interactions.
  
### Private Folders
- See _lib folder
- Next.js allows us to create private folders that are not accessible to the public.
- These can be created by adding a `_` prefix to the folder name.
- Even if we have  a `page.js` or `page.tsx` file in the folder, it will not be accessible to the public, as we used _ in the naming of the folder. On accessing we will get a 404 error.
- NOTE: If we actually want to use underscore and also to make the folder public; in the folder name, we can use `%5F` instead in naming and access the route by using _. This will result in the folder being accessible to the public and also underscore being used in the folder/route name.

### Route Groups

- See register, login and forgot-password folders
- Our authentication routes are scattered across the app directory, which is not a good practice.
- Therefore, make a auth folder inside the app directory and put all the three authentication related folder inside it. But now the routes will break, as Next.js will treat the auth folder as a route.
- To avoid this, we can use route groups. 
- Simply, wrap the auth folder name with a (). This avoids auth being included in the route path.
- NOw, we can access /register, /login and /forgot-password routes without the auth prefix.
- This makes our desired routes work and also keeps our code organized.