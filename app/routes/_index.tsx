import type * as React from "react"

import type { MetaFunction } from "@remix-run/node"
import * as motion from "framer-motion/client"
import { BASE_TRANSITION } from "utils/animation"

import { generateMetadata } from "@/utils/metadata"

export const meta: MetaFunction = () =>
  generateMetadata({
    path: "/",
    title: "Typography Showcase",
    description: "A gallery of beautiful fonts",
  })

const Index: React.FC = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <motion.h1
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="text-3xl font-bold tracking-tighter md:text-5xl"
      >
        Typography Showcase
      </motion.h1>
    </main>
  )
}

export default Index
