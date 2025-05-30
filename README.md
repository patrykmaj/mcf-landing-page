# MCF Landing Page

This is a Next.js single-page landing website using TypeScript, Tailwind CSS, SSG, and advanced animations (Spline, video, bento boxes, pointcloud, etc). It is optimized for SEO and performance, with a modular component structure:

- Navbar
- Hero (header text + Spline animation)
- Product (header text + video showcase)
- Features (header text + 6 bento boxes with animations)
- About (header text + pointcloud animation)
- Demo (header text + 4 demo videos, switchable by button)
- Pricing (3 boxes + CTA)
- Footer

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Build Static Site

```bash
npm run build && npm run start
```

## Tech Stack
- Next.js (App Router, SSG)
- TypeScript
- Tailwind CSS
- ESLint
- Animations: Framer Motion, Spline, video

## SEO & Performance
- next-seo
- next/image
- Best practices for Core Web Vitals

---
Replace placeholder assets with your own and follow the component structure for further development.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
