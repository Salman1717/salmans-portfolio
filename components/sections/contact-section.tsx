"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Coffee, Sparkles } from "lucide-react"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"
import { motion } from "framer-motion"

export function ContactSection() {
  const { personalInfo, openExternalLink } = usePortfolioViewModel()

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div className="flex items-center justify-center gap-2 mb-4" variants={fadeUp}>
              <Coffee className="h-6 w-6 text-primary" />
              <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
            </motion.div>

            <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" variants={fadeUp}>
              Let's Connect!
            </motion.h2>

            <motion.div className="max-w-2xl mx-auto space-y-4" variants={fadeUp}>
              <p className="text-xl text-muted-foreground text-balance">
                If you have an exciting opportunity or want to discuss potential collaborations
              </p>
              <p className="text-lg text-foreground font-medium">
                Feel free to approach me – I'd love to explore how we can work together! ✨
              </p>
            </motion.div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300 max-w-md w-full">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">Drop me a line anytime</p>
              <Button
                variant="outline"
                onClick={() => window.open(`mailto:${personalInfo.email}`)}
                className="w-full"
              >
                {personalInfo.email}
              </Button>
            </div>
          </motion.div>

          {/* Socials & Location Card */}
          <motion.div
            className="glass-card p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Footer note */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">Looking forward to connecting with you! 🚀</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
