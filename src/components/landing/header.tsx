"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, t, toggleLang } = useLanguage()
  const waUrl = `https://wa.me/573045297565?text=${encodeURIComponent(t.header.waText)}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Revil</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.services}
            </a>
            <a href="#precios" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.pricing}
            </a>
            <a href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.testimonials}
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.header.faq}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang === "es" ? "EN" : "ES"}
            </button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                {t.header.cta}
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.services}
              </a>
              <a href="#precios" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.pricing}
              </a>
              <a href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.testimonials}
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.header.faq}
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <button
                  onClick={toggleLang}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "es" ? "Switch to English" : "Cambiar a Español"}
                </button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    {t.header.cta}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
