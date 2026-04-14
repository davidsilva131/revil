# InstaBoost — Landing Page

Landing page para un servicio de crecimiento en Instagram, construida con Astro, React y Tailwind CSS.

## Stack

- **[Astro](https://astro.build/)** — Framework principal
- **[React](https://react.dev/)** — Componentes interactivos
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilos
- **[Radix UI](https://www.radix-ui.com/)** — Componentes accesibles (Accordion)
- **[Lucide React](https://lucide.dev/)** — Iconos
- **TypeScript**

## Estructura del proyecto

```text
/
├── public/
└── src/
    ├── components/
    │   ├── landing/
    │   │   ├── header.tsx
    │   │   ├── hero-section.tsx
    │   │   ├── features-section.tsx
    │   │   ├── pricing-section.tsx
    │   │   ├── testimonials-section.tsx
    │   │   ├── faq-section.tsx
    │   │   ├── cta-section.tsx
    │   │   ├── footer.tsx
    │   │   └── landing-content.tsx
    │   └── ui/
    │       ├── button.tsx
    │       ├── badge.tsx
    │       └── accordion.tsx
    ├── lib/
    │   ├── language-context.tsx   # Contexto i18n (ES / EN)
    │   └── utils.ts
    ├── pages/
    │   └── index.astro
    └── styles/
        └── globals.css
```

## Características

- Soporte multilenguaje **ES / EN** mediante contexto de React
- Secciones: Hero, Features, Pricing (COP / USD), Testimonials, FAQ, CTA
- Diseño responsive con modo oscuro
- Botón de contacto directo vía WhatsApp

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando        | Acción                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Instala las dependencias                        |
| `pnpm dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Genera el sitio de producción en `./dist/`      |
| `pnpm preview` | Previsualiza el build localmente                |

## Requisitos

- Node.js `>=22.12.0`
- pnpm
