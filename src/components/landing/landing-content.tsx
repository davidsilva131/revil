"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "./header"
import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { PricingSection } from "./pricing-section"
import { TestimonialsSection } from "./testimonials-section"
import { FAQSection } from "./faq-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"

export function LandingContent() {
  return (
    <LanguageProvider>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </LanguageProvider>
  )
}
