# 🚀 Non-Tech to Tech — Startup Landing Page

> **"Think Beyond Technology. Transform Ideas Into Innovation."**

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Copyright](https://img.shields.io/badge/Copyright-All_Rights_Reserved-red.svg)](#-copyright--usage-policy)

A high-performance, modern, and accessible web platform designed to empower non-technical founders, educators, and traditional businesses to bridge the digital gap and transform their ideas into production-ready software solutions without the gatekeeping or confusing jargon.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Quick Start Guide](#-quick-start-guide)
- [🧩 Pages & Interactive Views](#-pages--interactive-views)
- [🧪 Interactive Learning Tasks](#-interactive-learning-tasks)
- [📦 Build & Deployment](#-build--deployment)
- [📬 Contact & Support](#-contact--support)
- [🔒 Copyright & Usage Policy](#-copyright--usage-policy)

---

## 🌟 Overview

**Non-Tech to Tech** is crafted with modern web standards, focusing on clean architecture, ultra-fast client-side routing, and real-world interactive components. Whether you're a beginner exploring web development or a business owner looking for a digital transformation roadmap, this application delivers:

- **Plain-English explanations** of modern software concepts.
- **Hands-on interactive learning sandboxes** demonstrating HTML, CSS, and DOM manipulation.
- **Production-ready UI patterns** built with modern React 19, TypeScript, and Tailwind CSS v4.

---

## ✨ Key Features

- **⚡ Blazing Fast Performance**: Powered by Vite 8 with sub-second hot module replacement (HMR) and optimized production bundles.
- **📱 Fully Responsive Design**: Mobile-first architecture that seamlessly adapts across smartphones, tablets, and wide desktop screens.
- **🎨 Modern Aesthetic & Typography**: Styled with Tailwind CSS v4 and Google Fonts (`Space Grotesk`, `Manrope`, and `Inter`).
- **🧭 Seamless Client-Side Navigation**: Hash-based, zero-reload routing between views (`#home`, `#about`, `#services`, `#portfolio`, `#learning`, `#contact`).
- **🔍 Deep-Dive Project Modal**: Interactive case study showcase displaying technology stacks, project metrics, and live demo modals.
- **🛠️ Interactive Educational Modules**: Embedded real-time sandboxes showcasing static websites, portfolio structures, and dynamic JavaScript state manipulation.
- **✉️ Validated Contact Portal**: Real-time form input validation, phone support link, email integration, and a styled map view.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Modern component-based user interface library |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety, interface contracts, and maintainable code |
| **[Vite 8](https://vite.dev/)** | Next-generation frontend build tooling and dev server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first styling with `@tailwindcss/vite` |
| **[Lucide-Style SVG Icons](https://lucide.dev/)** | Custom, lightweight vector icons with zero heavy bundle bloat |

---

## 📁 Project Structure

```text
Non-Tech to Tech – Startup Landing Page/
├── public/                     # Static assets (favicons, SVG logos, imagery)
│   ├── favicon.svg
│   ├── logo.svg
│   └── images/
├── src/
│   ├── assets/                 # App images and vector illustrations
│   ├── components/             # Reusable UI components & view controllers
│   │   ├── AboutView.tsx       # Mission, philosophy & team spotlight
│   │   ├── ContactView.tsx     # Contact form, direct details & location map
│   │   ├── Footer.tsx          # Persistent responsive footer with quick navigation
│   │   ├── GetStartedModal.tsx # Consultation intake & onboarding modal
│   │   ├── HomeView.tsx        # Hero banner, stats, value props & testimonials
│   │   ├── Icons.tsx           # Scalable SVG icons and branded social vectors
│   │   ├── LearningTasksView.tsx# Curriculum & hands-on practical task modules
│   │   ├── Navbar.tsx          # Sticky responsive navigation with mobile drawer
│   │   ├── PortfolioView.tsx   # Project showcase & case study gallery
│   │   ├── ProjectDetailModal.tsx # Detailed case study modal
│   │   ├── ServicesView.tsx    # Digital transformation & engineering tracks
│   │   └── TaskPreviewModal.tsx# Live code preview & interactive JS sandbox
│   ├── data.ts                 # Centralized content, services, tasks, FAQs & stats
│   ├── types.ts                # TypeScript interfaces and data models
│   ├── index.css               # Global CSS styles & Tailwind configuration
│   ├── App.tsx                 # Root application component & hash routing
│   └── main.tsx                # Application entry point
├── index.html                  # HTML5 document template & metadata
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite plugins and build settings
```

---

## ⚡ Quick Start Guide

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your machine.

> 💡 **Note**: This is a **Node.js / React** web project, not a Flutter or native mobile app. Run with `npm` rather than `flutter`.

### 1. Clone the Repository

```bash
git clone https://github.com/vijayeducation2425-bot/Non-Tech-to-Tech-Startup-Landing-Page.git
cd Non-Tech-to-Tech-Startup-Landing-Page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

To automatically open your default browser upon startup:

```bash
npm run dev -- --open
```

Once running, navigate to:
👉 **`http://localhost:5173/`**

---

## 🧩 Pages & Interactive Views

The application features 6 specialized views accessible through smooth navigation:

1. **Home (`#home`)**:
   - Hero banner with high-impact value proposition.
   - Core impact statistics counter (50+ Ideas Launched, 98% Satisfaction).
   - Transformation roadmap steps and client testimonials.
2. **About Us (`#about`)**:
   - The mission behind bridging non-technical founders with digital tech.
   - Core philosophy: *Demystify, Democratize, and Deliver*.
   - Leadership & advisory team bios.
3. **Services (`#services`)**:
   - In-depth tracks: *Digital Transformation*, *Website Development*, *UI/UX Design*, and *Technology Consulting*.
   - Feature breakdowns, target outcomes, and direct deliverables.
4. **Portfolio (`#portfolio`)**:
   - Case studies of launched products with performance benchmarks.
   - Interactive project inspection modals.
5. **Learning Tasks (`#learning`)**:
   - Structured curriculum for digital beginners.
   - Three interactive sandbox exercises.
6. **Contact Us (`#contact`)**:
   - Validated inquiry submission form.
   - Direct communication channels and headquarters location.

---

## 🧪 Interactive Learning Tasks

Built directly into the platform is an interactive learning modal (`TaskPreviewModal`) demonstrating core web development concepts:

- **Task 1: Build a Simple Static Website**: Semantic HTML5 layout, multi-column flexbox footer, and sticky navigation preview.
- **Task 2: Create a Portfolio Webpage**: Bespoke personal branding showcase, animated capability bars, and clean CSS grid cards.
- **Task 3: Introduction to JavaScript**:
  - Live interactive counter state.
  - Form validation with error handling.
  - Accent theme color switcher.
  - Dynamic array CRUD todo-list with real-time DOM manipulation.

---

## 📦 Build & Deployment

### Production Build

Compile and bundle optimized static assets for production:

```bash
npm run build
```

This generates production-ready minified files inside the `dist/` directory with code splitting and hashed assets.

### Preview Production Build

Test the production build locally prior to deployment:

```bash
npm run preview
```

### Deployment Options

The static output in `dist/` can be deployed on any modern hosting provider:
- **Vercel**: Run `vercel` or link your GitHub repository.
- **Netlify**: Drag and drop the `dist/` folder or configure continuous deployment with `npm run build`.
- **GitHub Pages**: Build and deploy `dist/` via GitHub Actions.

---

## 📬 Contact & Support

Have questions, collaboration inquiries, or feedback? Get in touch directly:

- **📧 Email**: [tvijays2025@gmail.com](mailto:tvijays2025@gmail.com)
- **📞 Phone**: [+91 95678 18249](tel:+919567818249)
- **📍 Location**: Anjarakandy, Kannur, Kerala, India
- **🌐 GitHub**: [@vijayeducation2425-bot](https://github.com/vijayeducation2425-bot)

---

## 🔒 Copyright & Usage Policy

All rights reserved. **Do not modify this project or use it anywhere without permission.**

Unauthorized copying, redistribution, modification, public display, or commercial use of this codebase, design, or assets is strictly prohibited without explicit written permission from the author. For inquiries, please reach out via [tvijays2025@gmail.com](mailto:tvijays2025@gmail.com).

