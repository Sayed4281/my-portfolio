# Sayed Shahloob P — Executive Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sayedshahloobp-portfolio.vercel.app/)

A state-of-the-art, high-performance executive portfolio designed and engineered for **Sayed Shahloob P** — Software Developer, Technical Lead, and Business Analyst. Built on **Next.js 14 App Router**, featuring custom physics animations, 3D card tilt shaders, scroll-driven timeline beams, and server-side Nodemailer integration.

🌐 **Live Website**: [https://sayedshahloobp-portfolio.vercel.app/](https://sayedshahloobp-portfolio.vercel.app/)

---

## ✨ Key Features & Capabilities

- 🚀 **Next.js 14 App Router Architecture**: Built with Next.js App Router, React 18, and server-side API routes for optimal speed and SEO performance.
- 🎨 **Ultra-Premium Dark Mode Aesthetics**: Tailored corporate color palette (`#0B1220`, `#0E1726`, `#172033`), subtle glassmorphism backdrop blurs, ambient radial glows, and grid overlays.
- ⚡ **Interactive 3D Card Tilt (`TiltCard`)**: Physics-based mouse tracking rotation with dynamic radial cursor glare shaders applied across project, capability, and experience cards.
- 🧲 **Magnetic Mouse Pull Buttons (`MagneticButton`)**: Spring physics buttons that dynamically pull toward the user's cursor on hover.
- 📈 **Scroll-Driven Timeline Progress (`Experience`)**: A vertical cyan gradient beam that fills downwards dynamically (`scaleY`) as you scroll, illuminating milestone nodes with pulsing light indicators.
- 📧 **Server-Side Nodemailer Email API (`/api/contact`)**: Secure contact form handler using Next.js API Route and Gmail App Password dispatch to `sayedshahloobpofficial@gmail.com`.
- 📱 **100% Fluid & Mobile-Responsive Layout**: Optimized for all device viewports from mobile smartphones to ultra-wide desktop monitors.
- 🔍 **SEO & Core Web Vitals Optimization**: Automated metadata, JSON-LD schema markup readiness, open-graph tags, and custom favicon.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router & API Routes) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Email Service** | [Nodemailer](https://nodemailer.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Repository Structure

```text
my-portfolio/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Nodemailer POST API route handler
│   │   ├── globals.css              # Corporate glassmorphism & scrollbar styles
│   │   ├── layout.tsx               # Root layout, metadata & favicon
│   │   ├── page.tsx                 # Home page assembling all sections
│   │   └── not-found.tsx            # Custom 404 page
│   └── components/
│       ├── About.tsx                # Professional summary & stat counter overlay
│       ├── Contact.tsx              # Interactive contact form & social links
│       ├── CustomCursor.tsx         # Dual-layer spring physics cursor
│       ├── Experience.tsx           # Scroll-progress vertical timeline
│       ├── Header.tsx               # Glassmorphism navbar & scroll spy
│       ├── Hero.tsx                 # Parallax hero showcase & CTA buttons
│       ├── HowIWork.tsx             # 6-Step methodology grid
│       ├── LeadershipManagement.tsx # Operational competencies
│       ├── MagneticButton.tsx       # Spring magnetic pull wrapper
│       ├── Preloader.tsx            # Glowing orbital avatar preloader
│       ├── Projects.tsx             # Filterable project portfolio grid & modal
│       ├── Skills.tsx               # Technical competencies grid
│       ├── TiltCard.tsx             # 3D mouse tilt with dynamic glare shader
│       └── WhatIDo.tsx              # Core capability cards
├── .env.local                       # Environment variables (Git-ignored)
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Project scripts and dependencies
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sayed4281/my-portfolio.git
   cd my-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=sayedshahloobpofficial@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 📦 Deployment (Vercel)

1. Push your code to GitHub.
2. Import your repository into [Vercel](https://vercel.com).
3. Set the Environment Variables (`EMAIL_USER`, `EMAIL_PASS`) in your Vercel project settings.
4. Deploy!

---

## 📬 Contact & Connect

- **Name**: Sayed Shahloob P
- **Role**: Software Developer / Technical Lead / Business Analyst
- **Email**: [sayedshahloobpofficial@gmail.com](mailto:sayedshahloobpofficial@gmail.com)
- **Phone / WhatsApp**: [+91 9567220971](https://wa.me/919567220971)
- **GitHub**: [github.com/Sayed4281](https://github.com/Sayed4281)
- **LinkedIn**: [linkedin.com/in/er-sayed-shahloob-p/](https://www.linkedin.com/in/er-sayed-shahloob-p/)
- **Live Portfolio**: [https://sayedshahloobp-portfolio.vercel.app/](https://sayedshahloobp-portfolio.vercel.app/)

---

© Sayed Shahloob P. All rights reserved.
