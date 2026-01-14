"use client"
import * as React from "react"

import classNames from "@/utils/classNames"

const BackTopButton: React.FC = () => {
  const [isEnd, setIsEnd] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = (): void => {
      setIsEnd(window.innerHeight - window.scrollY < 200)
    }
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (): void => {
    window.scrollBy({
      top: isEnd ? -window.innerHeight : window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <button
      className="fixed right-0 bottom-4 size-10"
      onClick={() => {
        scroll()
      }}
    >
      <svg
        width="22"
        height="32"
        viewBox="0 0 22 32"
        fill="none"
        className={classNames(
          "transition-transform",
          isEnd ? "rotate-180" : ""
        )}
      >
        <path
          d="M0.289952 21.7099L10.29 31.7099C10.4773 31.8962 10.7308 32.0007 10.995 32.0007C11.2591 32.0007 11.5126 31.8962 11.7 31.7099L21.7 21.7099L20.29 20.2999L12 28.5899L12 -6.18832e-05L9.99995 -6.2058e-05L9.99995 28.5899L1.70995 20.2999L0.289952 21.7099Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

export default BackTopButton
