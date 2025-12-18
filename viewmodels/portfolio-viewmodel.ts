"use client"

import { useState, useCallback } from "react"
import { personalInfo, projects, skills, experiences, achievements } from "@/models/portfolio-data"

export function usePortfolioViewModel() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const scrollToSection = useCallback((sectionId: string) => {
    console.log("[v0] Scrolling to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Account for fixed navigation
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Element not found:", sectionId)
    }
  }, [])

  const openContactForm = useCallback(() => {
    setIsContactFormOpen(true)
  }, [])

  const closeContactForm = useCallback(() => {
    setIsContactFormOpen(false)
  }, [])

  const selectProject = useCallback((projectId: string) => {
    setSelectedProject(projectId)
  }, [])

  const downloadResume = useCallback(() => {
    window.open("/resume.docx", "_blank")
  }, [])

  const openExternalLink = useCallback((url: string) => {
    window.open(url, "_blank")
  }, [])

  return {
    // Data
    personalInfo,
    projects,
    skills,
    experiences,
    achievements,

    // State
    isContactFormOpen,
    selectedProject,

    // Actions
    scrollToSection,
    openContactForm,
    closeContactForm,
    selectProject,
    downloadResume,
    openExternalLink,
  }
}
