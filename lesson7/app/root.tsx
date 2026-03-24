import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
<<<<<<< HEAD
} from "@remix-run/react";
import { ThemeProvider } from "./context/ThemeContext";
=======
} from '@remix-run/react';
import { createContext, useContext, useState } from 'react';
>>>>>>> upstream/main

type Theme = 'light' | 'dark';
export const ThemeContext = createContext<Theme | null>(null);

import appStyles from './app.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStyles },
];

export function meta() {
  return [
<<<<<<< HEAD
    { title: "Remix Theme App" },
    {
      name: "description",
      content: "Simple Remix app with light and dark theme",
=======
    { title: 'Remix Theme App' },
    {
      name: 'description',
      content: 'Simple Remix app with light and dark theme',
>>>>>>> upstream/main
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
<<<<<<< HEAD
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
=======
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeContext.Provider>
>>>>>>> upstream/main
      </body>
    </html>
  );
}
