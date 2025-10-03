"use client"

import { Card, CardContent } from "@/components/ui/card"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"
import { MapPin, Code, Sparkles, Target } from "lucide-react"
import { motion } from "framer-motion"

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

export function AboutSection() {
  const { experiences } = usePortfolioViewModel()

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              From Code to Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every line of code shapes my story — a journey of transforming ideas into realities.
            </p>
          </motion.div>

          {/* Journey Story */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
          >
            {/* Chapter 1 */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <Card className="glass-card ml-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">The Spark</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    It began with a simple question: how do apps come to life? That spark of curiosity pulled me into iOS. 
                    I still remember the excitement of writing my first Swift lines and watching an idea take shape on screen. 
                    It was more than code — it was creation, and I was hooked.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chapter 2 */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <Card className="glass-card ml-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">The Leap</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As my skills grew, so did my imagination. Building standard apps wasn’t enough anymore.  
                    I dove into AR with RealityKit and AI/ML with Python — suddenly I wasn’t just making apps, 
                    I was blending the digital with the real world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chapter 3 */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="absolute -left-4 top-8 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <Card className="glass-card ml-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">The Journey</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Over the last four years, I’ve gone from curious beginner to publishing apps on the App Store — 
                    AR in education, AI recipe generators, and more. Along the way, I’ve interned, collaborated, and 
                    learned how to ship real-world products.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">What I Bring to the Table</h3>
              <p className="text-muted-foreground">A unique blend of technical expertise and creative vision</p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { icon: "📱", title: "Mobile App Development", desc: "Building native iOS apps from design to deploy" },
                { icon: "🤖", title: "AI / ML", desc: "Designing and deploying AI/ML models" },
                { icon: "⚡", title: "Swift & SwiftUI Proficiency", desc: "Clean, efficient, and expressive app development" },
                { icon: "📉", title: "Data Science", desc: "Data cleaning, visualization, and insights" },
                { icon: "🤓", title: "Learning Mindset", desc: "Always curious, always growing" },
                { icon: "🎯", title: "Innovation Focus", desc: "Pushing technological boundaries" },
              ].map((skill, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="glass-card hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Journey Timeline */}
          <motion.div variants={fadeInUp}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground">Key milestones that shaped my expertise</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

              <motion.div
                className="space-y-8"
                variants={staggerContainer}
              >
                {experiences.map((exp, index) => (
                  <motion.div key={index} className="relative" variants={fadeInUp}>
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                    <Card className="glass-card md:ml-16 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground mb-1">{exp.position}</h4>
                            <p className="text-primary font-medium text-lg">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2 mt-2 lg:mt-0">
                            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          {exp.description.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Closing Card */}
          <motion.div className="text-center mt-16" variants={fadeInUp}>
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium">Dubai Ready</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">Ready for the Next Adventure</h4>
                <p className="text-muted-foreground leading-relaxed">
                  With full relocation readiness and sponsorship availability, I'm excited to bring my passion for
                  mobile innovation to Dubai's dynamic tech ecosystem. Let's build the future together.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
