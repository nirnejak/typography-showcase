import type * as React from "react"

import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Typography Showcase" },
    { name: "description", content: "A gallery of beautiful fonts" },
  ]
}

const Index: React.FC = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
        Typography Showcase
      </h1>
    </main>
  )
}

export default Index
