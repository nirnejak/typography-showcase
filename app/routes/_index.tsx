import type * as React from "react"

import type { MetaFunction } from "@remix-run/node"
import { motion } from "framer-motion"
import { BASE_TRANSITION } from "utils/animation"

import ParallaxText from "@/components/Text"
import { generateMetadata } from "@/utils/metadata"

export const meta: MetaFunction = () =>
  generateMetadata({
    path: "/",
    title: "Typography Showcase",
    description: "A gallery of beautiful fonts",
  })

const Index: React.FC = () => {
  return (
    <main className="grid h-[200vh] min-h-screen place-content-center">
      <motion.h1
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="text-3xl font-bold tracking-tighter md:text-5xl"
      >
        Typography Showcase
      </motion.h1>
      <div className="fixed bottom-0">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </div>
    </main>
  )
}

export default Index
