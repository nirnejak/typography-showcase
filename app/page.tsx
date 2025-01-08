import * as React from "react"

import type { Metadata } from "next"

import { generateMetadata } from "@/utils/metadata"
import ParallaxText from "@/components/ParallaxText"
import BackTopButton from "@/components/BackTopButton"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Typography Showcase",
  description: "A gallery of beautiful fonts",
})

const Home: React.FC = () => {
  return (
    <main className="h-[200vh]">
      <h1 className="fixed bottom-4 left-4 text-3xl font-bold tracking-tighter md:text-5xl">
        Typography Showcase
      </h1>

      <div className="fixed top-4">
        <ParallaxText baseVelocity={-5}>Typography Showcase</ParallaxText>
        <ParallaxText baseVelocity={5}>Framer Motion</ParallaxText>
      </div>
      <BackTopButton />
    </main>
  )
}

export default Home
