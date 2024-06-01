## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Notes
# Folder Structure
- app: Contains all the routes, components, and logic for the application
- app/lib: contains functions used in the application, such as reusable utility functions and data fetching functions
- app/ui: contains all the ui components for the application, like cards, tables, and forms
- public: contains all thestatic assets for the application, like images
- scripts: contains a seeding script
# Typescript
- const { } provides a way to access the properties of the object returned by the function!!!
- for example, the auth() function returns a Session object. If I write const bloop = auth(), then bloop is a Session object. But if I don't want the whole object because I only care about a particular property, like the Session.user property, then I can directly access it using the {}. So, const { user } = auht() directly access the user property of the Session object!
- properties in sql statement have to match properties in definitions.ts file