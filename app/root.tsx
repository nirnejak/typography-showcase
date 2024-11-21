import type * as React from "react"

import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import config from "../config"

import "./tailwind.css"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "author",
    href: config.authorUrl,
  },
  {
    rel: "manifest",
    href: `${config.baseUrl}/manifest.json`,
    crossOrigin: "use-credentials",
  },
  {
    rel: "apple-touch-startup-image",
    href: `${config.baseUrl}/cover.png`,
  },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "shortcut icon", href: "/icons/icon-512x512.png" },
  { rel: "apple-touch-icon", href: "/icons/icon-512x512.png" },
]

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Typography Showcase" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jeetnirnejak" />
        <meta name="twitter:creator" content="@jeetnirnejak" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const App: React.FC = () => {
  return <Outlet />
}

export default App
