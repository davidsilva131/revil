"use client"

import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Shield,
  Clock,
  Users,
  Lock,
  HeadphonesIcon,
  TrendingUp,
  Sparkles
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const featureIcons = [Users, Clock, Shield, Lock, TrendingUp, HeadphonesIcon]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10">
            <Sparkles className="w-4 h-4 mr-2" />
            {t.features.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
