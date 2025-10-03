"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, TrendingUp, X } from "lucide-react"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ProjectsSection() {
  const { projects, openExternalLink } = usePortfolioViewModel()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projects
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of applications and experiments I&apos;ve built with passion and creativity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                className="relative group"
              >
                {/* Normal Collapsed Card */}
                <Card
                  onClick={() => setExpandedCard(project.id)}
                  className="overflow-hidden rounded-xl cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-square object-cover"
                    />
                    {/* Hover Overlay with Project Name */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </Card>

                {/* Expanded Card */}
                <AnimatePresence>
                  {expandedCard === project.id && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60"
                    >
                      <Card className="relative max-w-2xl w-full rounded-2xl shadow-xl overflow-hidden bg-background">
                        <CardContent className="p-6 space-y-6">
                          {/* Square Image */}
                          <div className="w-full flex justify-center">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-48 h-48 object-cover rounded-xl shadow-md"
                            />
                          </div>

                          {/* Title & Close */}
                          <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                            <button
                              onClick={() => setExpandedCard(null)}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              <X className="w-6 h-6" />
                            </button>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="default">{tech}</Badge>
                            ))}
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-4">
                            {project.githubUrl && (
                              <Button
                                variant="outline"
                                onClick={() => openExternalLink(project.githubUrl!)}
                              >
                                <Github className="w-4 h-4 mr-2" /> GitHub
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
