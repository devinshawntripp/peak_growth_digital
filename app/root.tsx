import React from 'react';
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useTheme } from '~/hooks/useTheme';


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles/tailwind.css" },
  // { rel: "icon", href: "/favicon.ico" },
];

export default function App() {
  const { theme } = useTheme();


  return (
    <html lang="en" data-theme={theme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: number | string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || "Something went wrong. Please try again.";
    errorStatus = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorStatus = "Error";
  } else {
    errorMessage = "An unexpected error occurred. Please try again later.";
    errorStatus = "Error";
  }

  return (
    <html lang="en" data-theme="dim">
      <head>
        <title>{errorStatus}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">{errorStatus}</h1>
          <p className="mb-4">{errorMessage}</p>
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}