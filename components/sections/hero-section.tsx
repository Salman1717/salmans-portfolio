"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"

export function HeroSection() {
  const { personalInfo, scrollToSection, downloadResume } = usePortfolioViewModel()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Available for UAE opportunities & Freelancing </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-balance">
              {personalInfo.title}
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-6 leading-relaxed max-w-3xl mx-auto">
              {personalInfo.subtitle}
            </p>

            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">{personalInfo.location}</p>

            <p className="text-base text-muted-foreground/70 mb-12 font-arabic" dir="rtl">
              {personalInfo.arabicGreeting}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl glow-effect transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
