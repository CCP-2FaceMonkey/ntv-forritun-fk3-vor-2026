import type { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { ThemeProvider } from '@theme/context/ThemeContext';

import appStyles from './app.css?url';
import { CounterProvider } from './feature/counter/context/CounterContext';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStyles },
];

export function meta() {
  return [
    { title: 'Remix Theme App' },
    {
      name: 'description',
      content: 'Simple Remix app with light and dark theme',
    },
  ];
}

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CounterProvider>
          <ThemeProvider>
            <Outlet />
            <Scripts />
          </ThemeProvider>
        </CounterProvider>
      </body>
    </html>
  );
}
