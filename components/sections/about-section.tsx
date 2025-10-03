"use client"

import { Card, CardContent } from "@/components/ui/card"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"
import { MapPin, Code, Sparkles, Target } from "lucide-react"

export function AboutSection() {
  const { experiences } = usePortfolioViewModel()

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              From Code to Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every line of code shapes my story — a journey of transforming ideas into  realities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Story Chapter 1 */}
            <div className="relative">
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
                   It began with a simple question: how do apps come to life? That spark of curiosity pulled me into the world of iOS. 
                   I still remember the excitement of writing my first lines of Swift and watching an idea take shape on the screen.
                  It was more than just code. It was creation, and I was hooked.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Story Chapter 2 */}
            <div className="relative">
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
                    As my skills grew, so did my imagination. Building standard apps wasn’t enough anymore.I wanted to push boundaries.
                     That drive led me into augmented reality with RealityKit and AI/ML experimentation with Python. Suddenly, I wasn’t just making apps; 
                     I was blending the digital with the real world, creating immersive learning tools, interactive experiences, and smarter apps that felt alive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Story Chapter 3 */}
            <div className="relative">
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
                    Over the last four years, I’ve gone from curious beginner to shipping production apps on the App Store—apps that bring AR into education, generate recipes with AI.
                     Along the way, I’ve interned, collaborated with teams, and learned how to take an idea all the way from concept to reality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">What I Bring to the Table</h3>
              <p className="text-muted-foreground">A unique blend of technical expertise and creative vision</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "📱", title: "Mobile App Development", desc: "Building native iOS apps from design to deploy" },
                { icon: "🤖", title: "AI / ML", desc: "Designing and deploying AI/ML models" },
                { icon: "⚡", title: "Swift & SwiftUI Proficiency", desc: "Clean, efficient, and expressive app development" },
                { icon: "📉", title: "Data Science", desc: "Loading, cleaning, visualizing, and analyzing data to extract insights3" },
                { icon: "🤓", title: "Learning Mindset", desc: "Always curious, always growing" },
                { icon: "🎯", title: "Innovation Focus", desc: "Always pushing technological boundaries" },
              ].map((skill, index) => (
                <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground">Key milestones that shaped my expertise</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
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
          </div>
        </div>
      </div>
    </section>
  )
}
