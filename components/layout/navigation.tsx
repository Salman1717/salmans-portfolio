"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollToSection } = usePortfolioViewModel()

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-xl gradient-text">Salman Mhaskar</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  console.log("[v0] Navigation clicked:", item.id)
                  scrollToSection(item.id)
                }}
                className="relative text-foreground/90 hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-primary/20 group border border-transparent hover:border-primary/30"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden w-10 h-10 rounded-xl hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/20 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    console.log("[v0] Mobile navigation clicked:", item.id)
                    scrollToSection(item.id)
                    setIsOpen(false)
                  }}
                  className="text-left py-3 px-4 text-foreground/90 hover:text-primary hover:bg-primary/20 transition-all duration-300 rounded-lg font-medium border border-transparent hover:border-primary/30"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
