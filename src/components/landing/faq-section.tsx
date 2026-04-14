"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10">
            <HelpCircle className="w-4 h-4 mr-2" />
            {t.faq.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.faq.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl px-6 bg-background data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
