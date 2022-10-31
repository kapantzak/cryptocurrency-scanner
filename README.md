# Cryptocurrency scanner

This is a [Next.js](https://nextjs.org/) application that shows information about cryptocurrency data.

A live version is deployed on Vercel and can be found here: [https://cryptocurrency-scanner.vercel.app/home](https://cryptocurrency-scanner.vercel.app/home).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical notes

### Rendering strategies

Due to the nature of this application (the fact that it renders frequently updated data), we do not use [SSG](https://nextjs.org/docs/basic-features/pages#static-generation-recommended), instead, we choose to use [SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering) for both main pages (landing and coin details page). In addition, in the details page, we fetch the price chart data on client side and render the chart as soon as we have the data available.

The only case where we use SSG is the About page, because its contents are static.

### Testing

We use [Jest](https://jestjs.io/) and [Testing library](https://testing-library.com/) in order to test the application.

Indicatively, a few test cases have been added, one for unit testing specific helper function and another one to test the Pagination component.

## Testing

Test the app by running:

```bash
npm run test
```

or in watch mode:

```bash
npm run testw
```

## Environment variables

The application needs the following environment variables in order to function correctly. Create a `.env.local` file in the root of your project and copy the following contents inside.

```bash
NEXT_PUBLIC_SITE_TITLE = 'Cryptocurrency scanner'
NEXT_PUBLIC_API_URL = 'https://api.coingecko.com/api/v3'
NEXT_PUBLIC_CURRENCY = 'usd'
NEXT_PUBLIC_LOCALE = 'en-US'
NEXT_PUBLIC_DEFAULT_PAGINATION_PER_PAGE = 20
NEXT_PUBLIC_PAGINATION_OPTIONS = '20,50,100,200'
NEXT_PUBLIC_MAX_WIDTH = 1280
```
