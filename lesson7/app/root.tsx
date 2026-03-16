import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
export const ThemeContext = createContext<Theme | null>(null);

import appStyles from './app.css?url';

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
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
