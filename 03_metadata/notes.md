# Routing Metadata

- Metadata API is a poweful feature in Next.js that allows you to define metadata for each pages.
- Two ways to define metadata:
  - export dynamic `generateMetadata` function
  - export static `metadata` object
  
## Configuring Metadata

- Metadata Rules
  - Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all the pages within the layout, while the page metadata applies only to that specific page. 
  - Metadata follows top-down order, starting from the root level. 
  - When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata, for matching properties.
  - Deeper metadata overrides the parent metadata.

## Static Metadata
- See /app/src/about/page.tsx
## Dynamic Metadata
- This comes in handy when we want to generate metadata having dynamic information, like current  route paramters.
- See /app/src/products/[productId]
- We can't use both static and dynamic metadata in the same file.
- Metadata won't work in page.tsx with "use client" directive, that is file which are client-side rendered. 
- To tackle this, create a seperate component for the client-side logic and add metadata in the page.tsx file, importing the client-side component.
- See arr/src/counter

### title Metadata
- The title metadata is used to set the title of the page.
- Can be either string or an object.
- See root layout.tsx and blog/page.tsx for object example, string is already covered in above examples.