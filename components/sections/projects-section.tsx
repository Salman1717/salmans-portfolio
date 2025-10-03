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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">My Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative mobile apps with AR, ML, and modern iOS development
            </p>
          </div>

          {/* Projects Grid - Changed to square grid layout with click-to-expand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div key={project.id} layout className="relative group">
                {/* Collapsed Card */}
                <Card
                  onClick={() => setExpandedCard(project.id)}
                  className="overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/50"
                >
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=400&query=modern mobile app interface"}
                      alt={project.title}
                       className="w-full aspect-square object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-white/80 text-sm">Click to view details</p>
                      </div>
                    </div>
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    )}
                  </div>
                </Card>

                <AnimatePresence>
                  {expandedCard === project.id && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                      onClick={() => setExpandedCard(null)}
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
                        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                      >
                        <Card className=" rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20">
                         
                          <CardContent className="p-8 space-y-6">
                            {/* Close button */}
                            <button
                              onClick={() => setExpandedCard(null)}
                              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background"
                            >
                              <X className="w-6 h-6" />
                            </button>

                            {/* Square Image */}
                            <div className="w-full flex justify-center">
                              <img
                                src={
                                  project.image ||
                                  "/placeholder.svg?height=300&width=300&query=modern mobile app interface"
                                }
                                alt={project.title}
                                className="w-64 h-64 object-cover rounded-2xl shadow-lg border-2 border-border"
                              />
                            </div>

                            {/* Title with featured badge */}
                            <div className="flex items-start gap-3">
                              <h3 className="text-3xl font-bold text-foreground flex-1">{project.title}</h3>
                              {project.featured && (
                                <div className="bg-yellow-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-current" />
                                  Featured
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-sm font-semibold text-foreground/70 mb-3">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Metrics */}
                            {project.metrics && project.metrics.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold text-foreground/70 mb-3">Key Achievements</h4>
                                <div className="space-y-2">
                                  {project.metrics.map((metric, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center gap-3 text-sm font-medium text-foreground/80"
                                    >
                                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                                      {metric}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                              {project.demoUrl && (
                                <Button
                                  size="lg"
                                  onClick={() => openExternalLink(project.demoUrl!)}
                                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Live Demo
                                </Button>
                              )}
                              {project.githubUrl && (
                                <Button
                                  size="lg"
                                  variant="outline"
                                  onClick={() => openExternalLink(project.githubUrl!)}
                                  className="flex-1 border-2 hover:bg-primary/10 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                >
                                  <Github className="h-4 w-4 mr-2" />
                                  View Source
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
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
