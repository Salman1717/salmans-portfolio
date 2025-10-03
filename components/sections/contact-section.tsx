"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Coffee, Sparkles } from "lucide-react"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"

export function ContactSection() {
  const { personalInfo, openExternalLink } = usePortfolioViewModel()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-primary" />
              <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect!</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground text-balance">
                If you have an exciting opportunity or want to discuss potential collaborations
              </p>
              <p className="text-lg text-foreground font-medium">
                Feel free to approach me – I'd love to explore how we can work together! ✨
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 max-w-md w-full">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">Drop me a line anytime</p>
              <Button variant="outline" onClick={() => window.open(`mailto:${personalInfo.email}`)} className="w-full">
                {personalInfo.email}
              </Button>
            </div>
          </div>

          <div className="glass-card p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{personalInfo.location}</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => openExternalLink(`https://${personalInfo.linkedin}`)}
                className="hover:bg-blue-500/10 hover:border-blue-500/30"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openExternalLink(`https://${personalInfo.github}`)}
                className="hover:bg-gray-500/10 hover:border-gray-500/30"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">Looking forward to connecting with you! 🚀</p>
          </div>
        </div>
      </div>
    </section>
  )
}
