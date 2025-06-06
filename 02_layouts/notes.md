## Important Concepts

- Pages are route-specific UI components.
- Layout is UI that is shared across multiple pages.

- To make a page, we use page.tsx or page.jsx file.
- To make a layout, we use layout.tsx or layout.jsx file.

### Layouts

- This takes children prop, which Next.js will populate with the page content. It means the page.tsx, will be passed as children to the layout component.
- When layout.tsx of root folder (app) is rendered, the page.tsx is passed as children to the layout component.
- Therefore, when we are in the root route, the layout.tsx is rendered, inside which the page.tsx is passed as children, which gets renderd on the screen.
- The layout allows to have a consistent UI across the app. For example, if we have a header and footer, we can put them in the layout.tsx file, so that they are rendered on every page/route.

### Nested Layouts

- See products folder. Here productId folder's layout is nested.


### Multiple Root Layouts

- Route Groups
  - Organize our project structure without affecting the URL.
  - Apply layouts selectively to specific parts of our app.
- To use Multiple Root Layout, remove the layout.tsx from the root folder and put it inside another folder, along with the page.tsx file, this will be our root route.
- Now we can have multiple root layouts in different folders using Route Groups.
- Example: Here layout.tsx inside the marketing is the root layout for markeing routes (/customers, /revenue) and also for (/) as page.tsx is inside it.
  - We have another root layout inside auth folder for routes such as /login and /register.