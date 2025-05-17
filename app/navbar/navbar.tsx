"use client"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [height, setHeight] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setHeight(window.innerHeight)

    const handleResize = () => {
      setHeight(window.innerHeight)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <h1
          className="text-xl md:text-2xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Omar Sameh
        </h1>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <button
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => window.scrollTo({ top: height, behavior: "smooth" })}
            >
              Projects
            </button>
            <button
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => window.scrollTo({ top: height * 5, behavior: "smooth" })}
            >
              Contact
            </button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
