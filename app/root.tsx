import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/main.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
    { rel: 'stylesheet', href: stylesheet },
  ] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className='p-12 flex flex-col items-center'>
        <div className='max-w-2xl w-full'>

          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
