import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { Inter, JetBrains_Mono, Plaster } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const monoFont = JetBrains_Mono({
  variable: "--mono-font",
  subsets: ["latin"],
})

const plasterFont = Plaster({
  variable: "--plaster-font",
  weight: "400",
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>{renderSchemaTags()}</head>

        <body
          className={classNames(
            sansFont.variable,
            monoFont.variable,
            plasterFont.variable,
            "overflow-x-hidden bg-white dark:bg-black font-sans text-black dark:text-white"
          )}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
