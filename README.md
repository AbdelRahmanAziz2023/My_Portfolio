# Abdelrahman Aziz - Full Stack Software Engineer Portfolio

A modern, dark-themed portfolio website showcasing expertise in mobile development, frontend, and backend (Node.js) technologies.

## 🎨 Features

- **Cinematic design system** — Neo-noir surfaces, violet/cyan accents, glassmorphism, and scroll reveals (see [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md))
- **Dark Theme** — Stitch-inspired palette with Space Grotesk + Inter
- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern Stack** - React 19, TypeScript, Tailwind CSS, Vite
- **Fast Performance** - Optimized build with minimal bundle size
- **Maintainable Code** - Clean folder structure with reusable components
- **Type Safe** - Full TypeScript support throughout
- **SEO Ready** - Semantic HTML and meta tags

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Then visit `http://localhost:5173/`

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── pages/               # Page sections (Hero, About, Projects, etc.)
├── data/                # Portfolio content
├── types/               # TypeScript definitions
├── App.tsx              # Main app component
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## 🎨 Customization

### Update Your Information
Edit `src/data/portfolio.ts`:
- Name, title, bio, email
- Projects and descriptions
- Skills by category
- Social media links

### Modify Colors
Edit `tailwind.config.js` to change the dark theme colors.

### Add Profile Photo
Place your image in `public/` and update `src/pages/HeroSection.tsx`.

## 📚 Documentation

- **PORTFOLIO_GUIDE.md** - Complete customization guide
- **SETUP_COMPLETE.md** - Setup checklist and next steps

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite (Rolldown)
- **Package Manager**: npm

## 🌈 Dark Theme Colors

- Dark Background: `#0f172a`
- Dark Cards: `#1e293b`
- Accent Primary (Cyan): `#0ea5e9`
- Accent Secondary (Purple): `#8b5cf6`
- Accent Tertiary (Pink): `#ec4899`

## 📱 Sections

1. **Header** - Sticky navigation with responsive menu
2. **Hero** - Landing section with CTA buttons
3. **About** - Professional background and skills
4. **Projects** - Featured and other projects
5. **Contact** - Contact form and social links
6. **Footer** - Quick links and copyright

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to Netlify
```

## �� Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Feel free to fork this template and customize it for your portfolio!

## 📄 License

This portfolio template is open source and available under the MIT License.

---

**Built with ❤️ using React, TypeScript & Tailwind CSS**
