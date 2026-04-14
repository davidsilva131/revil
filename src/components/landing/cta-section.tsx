"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { t } = useLanguage()
  const waUrl = `https://wa.me/573045297565?text=${encodeURIComponent(t.cta.waText)}`

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">{t.cta.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
          {t.cta.title.pre}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            {t.cta.title.highlight}
          </span>{" "}
          {t.cta.title.post}
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.cta.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full">
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              {t.cta.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {t.cta.footer}
        </p>
      </div>
    </section>
  )
}
