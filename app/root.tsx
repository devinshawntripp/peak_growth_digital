import React, { useEffect } from 'react';
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  useLocation,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useTheme } from '~/hooks/useTheme';
import styles from "./styles/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", href: "/favicon/favicon.ico" }, // Add this line
];

export default function App() {
  const { theme } = useTheme();
  const location = useLocation();
  // Keep the chat widget off pages that collect a phone number / SMS opt-in
  // consent (carrier A2P checklist item 6).
  const noWidgetPaths = ["/contact", "/sms-opt-in"];
  const showChatWidget = !noWidgetPaths.some((p) => location.pathname.startsWith(p));

  // Inject the LeadConnector chat widget on the client. A <script> rendered in
  // SSR JSX is not reliably executed after Remix hydration, so we append it
  // directly to the DOM (which the browser always runs) and clean it up on the
  // no-widget pages.
  useEffect(() => {
    const LOADER_ID = "lc-chat-widget-loader";
    if (showChatWidget) {
      if (!document.getElementById(LOADER_ID)) {
        const s = document.createElement("script");
        s.id = LOADER_ID;
        s.src = "https://widgets.leadconnectorhq.com/loader.js";
        s.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
        s.setAttribute("data-widget-id", "6a1a7d247645b2ba9afa79fd");
        s.setAttribute("data-source", "WEB_USER");
        document.body.appendChild(s);
      }
    } else {
      document.getElementById(LOADER_ID)?.remove();
      document
        .querySelectorAll("chat-widget, [data-chat-widget], [data-loader-instance-id]")
        .forEach((el) => el.remove());
    }
  }, [showChatWidget]);

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
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
