"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"

export function SkillsSection() {
  const { skills } = usePortfolioViewModel()

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-sm transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}