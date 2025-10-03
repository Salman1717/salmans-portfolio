"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { usePortfolioViewModel } from "@/viewmodels/portfolio-viewmodel"
import { motion } from "framer-motion"

export function SkillsSection() {
  const { skills } = usePortfolioViewModel()

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="glass-card hover:scale-[1.02] transition-all duration-300">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
