"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const WHATSAPP_NUMBER = "573045297565"

const planData = [
  { priceCOP: 15000, priceUSD: 3.75, followers: "1.000", popular: false },
  { priceCOP: 60000, priceUSD: 15, followers: "5.000", popular: true },
  { priceCOP: 120000, priceUSD: 30, followers: "10.000", popular: false },
]

function formatCOP(amount: number) {
  return amount.toLocaleString("es-CO") + " COP"
}

function formatUSD(amount: number) {
  return "$" + amount.toFixed(2) + " USD"
}

export function PricingSection() {
  const [currency, setCurrency] = useState<"COP" | "USD">("COP")
  const { t } = useLanguage()

  const plans = planData.map((data, i) => ({
    ...data,
    ...t.pricing.plans[i],
  }))

  function buildWhatsAppUrl(plan: typeof plans[0]) {
    const price = currency === "COP" ? formatCOP(plan.priceCOP) : formatUSD(plan.priceUSD)
    const message = t.pricing.waMessage(plan.name, plan.followers, price)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="precios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10">
            <Star className="w-4 h-4 mr-2" />
            {t.pricing.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.description}
          </p>

          {/* Currency toggle */}
          <div className="mt-8 inline-flex items-center rounded-full border border-border bg-card p-1 gap-1">
            <button
              onClick={() => setCurrency("COP")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                currency === "COP"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.pricing.cop}
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                currency === "USD"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.pricing.usd}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    {t.pricing.popular}
                  </Badge>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.followers}</span>
                  <span className="text-muted-foreground ml-2">{t.pricing.followers}</span>
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-primary">
                    {currency === "COP" ? formatCOP(plan.priceCOP) : formatUSD(plan.priceUSD)}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full mt-8 rounded-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                <a href={buildWhatsAppUrl(plan)} target="_blank" rel="noopener noreferrer">
                  {t.pricing.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
