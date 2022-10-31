# Cryptocurrency scanner

This is a [Next.js](https://nextjs.org/) app that fetches and displays cryptocurrency data.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
