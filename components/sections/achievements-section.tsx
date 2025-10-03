"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"

export function AchievementsSection() {
  const { achievements } = usePortfolioViewModel()

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "award":
        return "bg-yellow-500/20 text-yellow-800 border-yellow-500/30"
      case "recognition":
        return "bg-blue-500/20 text-blue-800 border-blue-500/30"
      case "milestone":
        return "bg-green-500/20 text-green-800 border-green-500/30"
      case "certification":
        return "bg-purple-500/20 text-purple-800 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-800 border-gray-500/30"
    }
  }

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Milestones and recognition that showcase my journey in mobile development and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className="glass-card hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={getCategoryColor(achievement.category)}>
                          {achievement.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                    </div>
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
