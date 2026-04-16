"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "es" | "en"

export const translations = {
  es: {
    header: {
      services: "Servicios",
      pricing: "Precios",
      testimonials: "Testimonios",
      faq: "FAQ",
      cta: "Empezar Ahora",
      waText: "Hola! Estoy interesado en sus servicios de Instagram y me gustaría recibir más información.",
    },
    hero: {
      badge: "Resultados en menos de 24 horas",
      h1: {
        boost: "Aumenta tus",
        followers: "seguidores",
        gain: "Gana",
        reputation: "reputación",
        take: "e impulsa tu",
        instagram: "Instagram",
        next: "al siguiente nivel",
      },
      description:
        "Obtén seguidores reales y de alta calidad, más de 50,000 clientes satisfechos confían en nosotros para hacer crecer sus cuentas.",
      cta: "Ver Precios",
      stats: [
        { value: "50.000+", label: "Clientes Satisfechos" },
        { value: "10M+", label: "Seguidores Entregados" },
        { value: "99,9%", label: "Tasa de Satisfacción" },
        { value: "24/7", label: "Soporte Disponible" },
      ],
    },
    features: {
      badge: "Por qué elegirnos",
      title: "La forma más inteligente de crecer en Instagram",
      description: "Utilizamos tecnología de punta para garantizar resultados reales y duraderos.",
      items: [
        { title: "Seguidores Reales", description: "Solo trabajamos con perfiles reales y activos que interactúan con tu contenido." },
        { title: "Entrega Rápida", description: "Comienza a recibir seguidores en cuestión de minutos después de tu compra." },
        { title: "100% Seguro", description: "Tu cuenta está protegida. Nunca pedimos tu contraseña ni datos sensibles." },
        { title: "Privacidad Total", description: "Tus datos están encriptados y nunca compartimos tu información." },
        { title: "Crecimiento Orgánico", description: "Nuestro sistema simula un crecimiento natural para evitar detecciones." },
        { title: "Soporte 24/7", description: "Nuestro equipo está disponible las 24 horas para ayudarte con cualquier duda." },
      ],
    },
    pricing: {
      badge: "Precios Competitivos",
      title: "Elige el plan perfecto para ti",
      description: "Planes diseñados para cada necesidad. Desde influencers hasta grandes marcas.",
      cop: "Pesos (COP)",
      usd: "Dólares (USD)",
      followers: "seguidores",
      popular: "Más Popular",
      cta: "Comprar Ahora",
      plans: [
        { name: "Básico", features: ["Seguidores reales", "Entrega en 24-48 horas", "Sin contraseña requerida"] },
        { name: "Popular", features: ["Seguidores premium", "Entrega en 12-24 horas", "Sin contraseña requerida", "Soporte VIP 24/7"] },
        { name: "Pro", features: ["Seguidores premium", "Entrega en 6-12 horas", "Sin contraseña requerida", "Soporte VIP 24/7"] },
      ],
      waMessage: (plan: string, followers: string, price: string) =>
        `Hola! Me interesa el plan *${plan}* de *${followers} seguidores* por *${price}*. ¿Me pueden dar más información?`,
    },
    testimonials: {
      badge: "Testimonios Reales",
      title: "Lo que dicen nuestros clientes",
      description: "Miles de personas ya han transformado sus cuentas de Instagram con nosotros.",
      items: [
        { name: "María García", role: "Influencer de Moda", avatar: "MG", content: "Increíble servicio. En solo 2 días pasé de 5K a 10K seguidores y todos son perfiles reales que interactúan con mis posts." },
        { name: "Carlos Rodríguez", role: "Emprendedor Digital", avatar: "CR", content: "El mejor servicio que he probado. Rápido, seguro y con resultados visibles. Mi negocio ha crecido gracias a la visibilidad que gané." },
        { name: "Ana Martínez", role: "Content Creator", avatar: "AM", content: "Llevaba meses estancada en 2K seguidores. Gracias a Revil ahora tengo más de 15K y las marcas ya me contactan para colaboraciones." },
        { name: "Diego López", role: "Músico", avatar: "DL", content: "Excelente inversión para mi carrera. Los seguidores son reales y activos. El soporte es increíble, respondieron todas mis dudas." },
        { name: "Laura Sánchez", role: "Fotógrafa", avatar: "LS", content: "Al principio tenía dudas pero el resultado superó mis expectativas. Entrega rápida y seguidores de calidad. 100% recomendado." },
        { name: "Roberto Fernández", role: "Coach de Vida", avatar: "RF", content: "Mi perfil ganó mucha credibilidad con los nuevos seguidores. Ahora mis clientes potenciales confían más en mi trabajo." },
      ],
    },
    faq: {
      badge: "Preguntas Frecuentes",
      title: "¿Tienes dudas? Nosotros las resolvemos",
      description: "Aquí encontrarás respuestas a las preguntas más comunes.",
      items: [
        { question: "¿Los seguidores son reales?", answer: "Sí, todos nuestros seguidores son perfiles reales con fotos, publicaciones y actividad. No utilizamos bots ni cuentas falsas que puedan perjudicar tu cuenta." },
        { question: "¿Es seguro para mi cuenta?", answer: "Absolutamente. Nunca pedimos tu contraseña y utilizamos métodos que cumplen con las políticas de Instagram. Tu cuenta está 100% protegida." },
        { question: "¿Cuánto tiempo tarda la entrega?", answer: "Dependiendo del plan elegido, la entrega puede ser desde instantánea hasta 48 horas. Generalmente comenzarás a ver seguidores nuevos en las primeras horas." },
        { question: "¿Necesitan mi contraseña?", answer: "NO. Nunca pedimos tu contraseña. Solo necesitamos tu nombre de usuario de Instagram y que tu cuenta sea pública al momento de la entrega." },
        { question: "¿Qué métodos de pago aceptan?", answer: "Aceptamos Nequi, Bancolombia, Nubank, Paypal y Binance. Contactanos por WhatsApp para coordinar tu pago de forma segura y rápida." },
        { question: "¿Puedo comprar para varias cuentas?", answer: "Sí, puedes realizar compras para múltiples cuentas de Instagram. Solo asegúrate de especificar el nombre de usuario correcto en cada pedido." },
      ],
    },
    cta: {
      badge: "Oferta por tiempo limitado: 20% de descuento",
      title: { pre: "¿Listo para", highlight: "transformar", post: "tu Instagram?" },
      description: "Únete a más de 77,000 clientes que ya han dado el salto. Comienza a crecer hoy mismo y ve resultados en menos de 24 horas.",
      cta: "Comprar Seguidores Ahora",
      footer: "Sin contraseña • Entrega garantizada • Soporte 24/7",
      waText: "Hola! Estoy interesado en sus servicios de Instagram y me gustaría recibir más información.",
    },
    footer: {
      tagline: "El servicio #1 para crecer tu cuenta de Instagram de forma segura y efectiva.",
      services: { title: "Servicios", links: ["Comprar Seguidores"] },
      company: { title: "Empresa", links: ["Testimonios"] },
      support: { title: "Soporte", links: ["Contacto"]},
      copyright: "© 2026 Revil. Todos los derechos reservados.",
    },
  },
  en: {
    header: {
      services: "Services",
      pricing: "Pricing",
      testimonials: "Testimonials",
      faq: "FAQ",
      cta: "Get Started",
      waText: "Hello! I'm interested in your Instagram services and would like to receive more information.",
    },
    hero: {
      badge: "Results in less than 24 hours",
      h1: {
        boost: "Boost your",
        followers: "followers",
        gain: "Gain",
        reputation: "reputation",
        take: "and take your",
        instagram: "Instagram",
        next: "to the next level",
      },
      description:
        "Get real, high-quality followers who engage with your content. Over 50,000 satisfied customers trust us to grow their accounts.",
      cta: "See Pricing",
      stats: [
        { value: "50.000+", label: "Happy Clients" },
        { value: "10M+", label: "Followers Delivered" },
        { value: "99.9%", label: "Satisfaction Rate" },
        { value: "24/7", label: "Support Available" },
      ],
    },
    features: {
      badge: "Why choose us",
      title: "The smartest way to grow on Instagram",
      description: "We use cutting-edge technology to guarantee real and lasting results.",
      items: [
        { title: "Real Followers", description: "We only work with real, active profiles that engage with your content." },
        { title: "Fast Delivery", description: "Start receiving followers within minutes of your purchase." },
        { title: "100% Safe", description: "Your account is protected. We never ask for your password or sensitive data." },
        { title: "Full Privacy", description: "Your data is encrypted and we never share your information." },
        { title: "Organic Growth", description: "Our system simulates natural growth to avoid any detection." },
        { title: "24/7 Support", description: "Our team is available 24 hours a day to help you with any questions." },
      ],
    },
    pricing: {
      badge: "Competitive Pricing",
      title: "Choose the perfect plan for you",
      description: "Plans designed for every need. From influencers to big brands.",
      cop: "Pesos (COP)",
      usd: "Dollars (USD)",
      followers: "followers",
      popular: "Most Popular",
      cta: "Buy Now",
      plans: [
        { name: "Basic", features: ["Real followers", "Delivery in 24-48 hours", "No password required"] },
        { name: "Popular", features: ["Premium followers", "Delivery in 12-24 hours", "No password required", "VIP 24/7 Support"] },
        { name: "Pro", features: ["Premium followers", "Delivery in 6-12 hours", "No password required", "VIP 24/7 Support"] },
      ],
      waMessage: (plan: string, followers: string, price: string) =>
        `Hello! I'm interested in the *${plan}* plan with *${followers} followers* for *${price}*. Can you give me more information?`,
    },
    testimonials: {
      badge: "Real Testimonials",
      title: "What our customers say",
      description: "Thousands of people have already transformed their Instagram accounts with us.",
      items: [
        { name: "María García", role: "Fashion Influencer", avatar: "MG", content: "Amazing service. In just 2 days I went from 5K to 10K followers and they're all real profiles that interact with my posts." },
        { name: "Carlos Rodríguez", role: "Digital Entrepreneur", avatar: "CR", content: "The best service I've tried. Fast, safe and with visible results. My business has grown thanks to the visibility I gained." },
        { name: "Ana Martínez", role: "Content Creator", avatar: "AM", content: "I had been stuck at 2K followers for months. Thanks to Revil I now have over 15K and brands already contact me for collaborations." },
        { name: "Diego López", role: "Musician", avatar: "DL", content: "Excellent investment for my career. The followers are real and active. The support is incredible, they answered all my questions." },
        { name: "Laura Sánchez", role: "Photographer", avatar: "LS", content: "At first I had doubts but the result exceeded my expectations. Fast delivery and quality followers. 100% recommended." },
        { name: "Roberto Fernández", role: "Life Coach", avatar: "RF", content: "My profile gained a lot of credibility with the new followers. Now potential clients trust my work more." },
      ],
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Have questions? We have answers",
      description: "Here you'll find answers to the most common questions.",
      items: [
        { question: "Are the followers real?", answer: "Yes, all our followers are real profiles with photos, posts and activity. We don't use bots or fake accounts that could harm your account." },
        { question: "Is it safe for my account?", answer: "Absolutely. We never ask for your password and we use methods that comply with Instagram's policies. Your account is 100% protected." },
        { question: "How long does delivery take?", answer: "Depending on the plan chosen, delivery can be from instant to 48 hours. You'll generally start seeing new followers within the first few hours." },
        { question: "Do you need my password?", answer: "NO. We never ask for your password. We only need your Instagram username and your account to be public at the time of delivery." },
        { question: "What payment methods do you accept?", answer: "We accept Nequi, Bancolombia, Nubank, Paypal and Binance. Contact us on WhatsApp to coordinate your payment safely and quickly." },
        { question: "Can I buy for multiple accounts?", answer: "Yes, you can make purchases for multiple Instagram accounts. Just make sure to specify the correct username in each order." },
      ],
    },
    cta: {
      badge: "Limited time offer: 20% discount",
      title: { pre: "Ready to", highlight: "transform", post: "your Instagram?" },
      description: "Join over 77,000 customers who have already made the leap. Start growing today and see results in less than 24 hours.",
      cta: "Buy Followers Now",
      footer: "No password • Guaranteed delivery • 24/7 Support",
      waText: "Hello! I'm interested in your Instagram services and would like to receive more information.",
    },
    footer: {
      tagline: "The #1 service to grow your Instagram account safely and effectively.",
      services: { title: "Services", links: ["Buy Followers"] },
      company: { title: "Company", links: ["Testimonials"] },
      support: { title: "Support", links: ["Contact"] },
      copyright: "© 2026 Revil. All rights reserved.",
    },
  },
}

interface LanguageContextValue {
  lang: Language
  t: typeof translations.es
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es")
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"))
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
