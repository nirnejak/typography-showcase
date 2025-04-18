import * as React from "react"

type Event = MouseEvent | TouchEvent

const useClickOutside = (
  handler: (event: Event) => void
): React.RefObject<HTMLDivElement | null> => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const listener = (event: Event): void => {
      const { current: el } = ref
      if (
        el == null ||
        !(event.target instanceof Node) ||
        el.contains(event.target)
      ) {
        return
      }

      handler(event) // Call the handler only if the click is outside of the element passed.
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler]) // Reload only if ref or handler changes

  return ref
}

export default useClickOutside
