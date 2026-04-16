"use client"

import { Instagram, Twitter, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const waUrl = `https://wa.me/573045297565?text=${encodeURIComponent(t.header.waText)}`

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <img src="/LOGO_REVIL.jpg" alt="InstaBoost Logo"  />
              </div>
              <span className="text-xl font-bold text-foreground">Revil</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.services.title}</h3>
            <ul className="space-y-3">
              {t.footer.services.links.map((link, i) => (
                <li key={i}><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-3">
              {t.footer.company.links.map((link, i) => (
                <li key={i}><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.support.title}</h3>
            <ul className="space-y-3">
              {t.footer.support.links.map((link, i) => (
                <li key={i}><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
