import type { Metadata } from "next"
import type * as React from "react"
import BackTopButton from "@/components/BackTopButton"
import ParallaxText from "@/components/ParallaxText"
import { generateMetadata } from "@/utils/metadata"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Typography Showcase",
  description: "A gallery of beautiful fonts",
})

const Home: React.FC = () => {
  return (
    <main className="h-[200vh]">
      <h1 className="fixed bottom-4 left-4 font-bold text-3xl tracking-tighter md:text-5xl">
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
