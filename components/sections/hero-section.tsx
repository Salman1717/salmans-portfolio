"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"
import { motion } from "framer-motion"

export function HeroSection() {
  const { personalInfo, scrollToSection, downloadResume } = usePortfolioViewModel()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background floating blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 justify-center mx-auto"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Available for UAE opportunities & Freelancing
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-balance"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground text-balance mb-6 leading-relaxed max-w-3xl mx-auto"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {personalInfo.location}
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground/70 mb-12 font-arabic"
              dir="rtl"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {personalInfo.arabicGreeting}
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
