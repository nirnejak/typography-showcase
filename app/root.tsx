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
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plaster&display=swap",
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

        <meta name="application-name" content={config.appName} />
        <meta name="author" content={config.authorName} />
        <meta name="creator" content={config.creator} />
        <meta name="keywords" content={config.keywords.join(",")} />

        <meta name="theme-color" content="#000000" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, address=no, email=no, url=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={config.appName} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Typography Showcase" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={config.twitterSite} />
        <meta name="twitter:creator" content={config.twitterCreator} />

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
