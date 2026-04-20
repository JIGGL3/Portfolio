# Portfolio v2 — React + Vite + Framer Motion

A bold developer portfolio with a **deep violet + amber/gold** palette, animated project image cards, smooth scroll animations, and a fully responsive layout.

---

## 🚀 Quick Start

```bash
# 1. Unzip and enter the folder
unzip portfolio.zip && cd portfolio

# 2. Install dependencies (requires Node.js 18+)
npm install

# 3. Start dev server
npm run dev
# → opens at http://localhost:5173
```

---

## ✏️ Customize Your Content

**Everything lives in one file — open this first:**

```
src/data/portfolio.js
```

### Personal info
```js
export const personal = {
  name:     'Jane Doe',          // ← Your name
  role:     'Full Stack Dev',
  email:    'jane@email.com',
  github:   'https://github.com/janedoe',
  linkedin: 'https://linkedin.com/in/janedoe',
  resume:   '/resume.pdf',       // ← Put resume.pdf in /public/
  location: 'Mumbai, India',
}
```

### Add a real project image
```js
{
  title: 'My App',
  image: '/images/myapp.png',   // ← Put image in /public/images/
  // or use a full URL:
  image: 'https://i.imgur.com/abc123.png',
  // Leave null for the auto-generated placeholder:
  image: null,
  imageTheme: 'violet',         // violet | amber | rose | teal
}
```

---

## 📬 Connect the Contact Form

The form currently simulates sending. Replace the `setTimeout` in  
`src/sections/Contact.jsx` with a real service:

### Option A — EmailJS (no backend needed, free tier)
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser'
// Replace the setTimeout with:
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```
Sign up at https://www.emailjs.com

### Option B — Formspree
Change the form `onSubmit` to POST to your Formspree endpoint:
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```
Sign up at https://formspree.io

---

## 🎨 Change the Color Palette

Edit CSS variables in `src/index.css`:

```css
:root {
  --void:    #08060F;   /* page background */
  --gold:    #F5A623;   /* primary accent  */
  --violet:  #8B5CF6;   /* secondary accent */
  --magenta: #EC4899;   /* tertiary pop     */
}
```

---

## 🏗️ Build & Deploy

```bash
npm run build        # outputs to /dist
npm run preview      # preview production build locally
```

**Deploy to Vercel (recommended — free):**
```bash
npx vercel           # follow prompts, done in ~30 seconds
```

**Deploy to Netlify:**
Drag the `/dist` folder to https://app.netlify.com/drop

**Deploy to GitHub Pages:**
```bash
npm install --save-dev gh-pages
# add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed nav · scroll progress · mobile hamburger
│   ├── Navbar.module.css
│   ├── Footer.jsx          # Footer with nav links + brand
│   └── ProjectImage.jsx    # Smart image — real photo OR SVG placeholder
├── sections/
│   ├── Hero.jsx            # Typewriter · floating code block · stat counters
│   ├── Hero.module.css
│   ├── About.jsx           # Bio · stats · terminal card
│   ├── Skills.jsx          # Skill category cards with animated pills
│   ├── Projects.jsx        # Filterable · featured large cards · image panels
│   ├── Projects.module.css
│   ├── Internships.jsx     # Animated timeline with company avatars
│   ├── Testimonials.jsx    # Desktop grid + mobile swipe carousel
│   └── Contact.jsx         # Form with loading/success states · social links
├── hooks/
│   └── useTypewriter.js
├── data/
│   └── portfolio.js        # ← EDIT THIS FILE
├── App.jsx
├── main.jsx
└── index.css               # Design tokens (colors, fonts, layout)
```

---

## ✨ Features

- **Violet + Amber palette** — deep, rich, memorable
- **Project image system** — drop in a screenshot or get a beautiful SVG auto-placeholder
- **Featured projects** — large horizontal cards with image overlay + live demo button
- **Framer Motion** — page-load sequences, scroll reveals, layout animations
- **Mobile-first** — hamburger nav, testimonial carousel, responsive grids
- **Scroll progress bar** — gold → violet gradient in the navbar
- **Active section highlighting** — nav link lights up as you scroll
- **Working contact form** — ready to wire to EmailJS or Formspree
- **Zero external CSS frameworks** — pure CSS modules + CSS variables
