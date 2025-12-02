# Portfolio Project Guide

## 🎨 Overview

Your portfolio is built with:
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Dark theme styling
- **Vite** - Fast build tool

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.tsx       # Button component (primary, secondary, outline)
│   ├── Card.tsx         # Reusable card wrapper
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── SectionTitle.tsx # Styled section headers
│   └── index.ts         # Barrel export
│
├── pages/               # Main page sections
│   ├── HeroSection.tsx  # Hero/landing section
│   ├── AboutSection.tsx # About & skills
│   ├── ProjectsSection.tsx # Featured & other projects
│   ├── ContactSection.tsx   # Contact form
│   ├── Footer.tsx       # Footer section
│   └── index.ts         # Barrel export
│
├── data/                # Static data
│   └── portfolio.ts     # Portfolio content (skills, projects, social)
│
├── types/               # TypeScript types
│   └── portfolio.ts     # Type definitions
│
├── utils/               # Utility functions (for future use)
│
├── App.tsx              # Main app component
├── index.css            # Global styles & Tailwind directives
└── main.tsx             # React entry point
```

## 🎨 Dark Theme Palette

All colors are defined in `tailwind.config.js`:

```
Dark Background:  #0f172a (very dark blue-gray)
Dark Card:        #1e293b (dark slate)
Dark Border:      #334155 (border slate)
Dark Text:        #e2e8f0 (light text)
Muted Text:       #94a3b8 (muted slate)

Accent Primary:   #0ea5e9 (cyan)
Accent Secondary: #8b5cf6 (purple)
Accent Tertiary:  #ec4899 (pink)
```

## 🚀 Quick Start

### Running Development Server
```bash
npm run dev
```
Visit `http://localhost:5173`

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 How to Customize

### 1. Update Your Information
Edit `src/data/portfolio.ts`:

```typescript
export const about = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  email: 'your@email.com',
};

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/yourprofile', icon: 'github' },
  // Add more platforms...
];
```

### 2. Add Your Projects
Update the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    featured: true, // Show in featured section
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourproject',
  },
  // Add more projects...
];
```

### 3. Update Skills
Edit the `skills` array in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'Node.js', category: 'backend', level: 'advanced' },
  // Add your skills...
];
```

### 4. Modify Theme Colors
Edit `tailwind.config.js` and `src/index.css`:

**In tailwind.config.js**, modify the colors object:
```javascript
theme: {
  extend: {
    colors: {
      'dark-bg': '#your-color',
      // Modify other colors...
    },
  },
}
```

### 5. Add Your Photo
Replace the placeholder emoji in `src/pages/HeroSection.tsx`:

```typescript
<div className="w-full aspect-square rounded-2xl bg-gradient-to-br...">
  <img src="/path-to-your-photo.jpg" alt="Your Name" className="w-full h-full object-cover rounded-2xl" />
</div>
```

## 🧩 Component Usage

### Button Component
```typescript
<Button variant="primary" size="md">
  Click Me
</Button>
```
**Variants**: `primary`, `secondary`, `outline`  
**Sizes**: `sm`, `md`, `lg`

### Card Component
```typescript
<Card hover={true}>
  <h3>Card Title</h3>
  <p>Content here</p>
</Card>
```

### Section Title
```typescript
<SectionTitle
  title="Section Title"
  subtitle="Optional subtitle"
  centered={true}
/>
```

## 🎨 Global Utility Classes

```css
.container-custom    /* Max width 7xl with responsive padding */
.section-padding     /* Vertical section padding py-16 sm:py-20 lg:py-24 */
.gradient-text       /* Gradient text effect with accent colors */
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)

Mobile-first approach with navigation hamburger menu on mobile.

## 🔧 File Structure Best Practices

1. **Components** - Only UI components (reusable)
2. **Pages** - Full page sections
3. **Data** - Static content and configurations
4. **Types** - TypeScript definitions
5. **Utils** - Helper functions (use when needed)

## 📚 Adding New Sections

To add a new section:

1. Create component in `src/pages/NewSection.tsx`
2. Import and use in `src/App.tsx`:

```typescript
import { NewSection } from './pages'

export default function App() {
  return (
    <main>
      <NewSection />
    </main>
  )
}
```

## 🎯 Next Steps Recommended

1. Update portfolio data in `src/data/portfolio.ts`
2. Add your projects with descriptions
3. Update your profile information
4. Add your profile photo
5. Customize social links
6. Configure contact form backend
7. Deploy to Vercel/Netlify

## 📞 Contact Form

The contact form is currently a placeholder. To enable email functionality:

1. Install email service (e.g., `email-js`)
2. Update form submission in `src/pages/ContactSection.tsx`
3. Add your email service credentials

Example with EmailJS:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Send email using EmailJS
};
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag dist folder to Netlify
```

## 🎨 Customization Tips

- All colors use Tailwind classes: `bg-dark-bg`, `text-accent-primary`, etc.
- Gradients: `bg-gradient-to-r from-accent-primary to-accent-secondary`
- Hover effects: Use Tailwind's hover: prefix
- Transitions: All elements have `transition-colors duration-200` by default

## 📖 Learn More

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Vite Docs](https://vitejs.dev)

---

**Happy building! 🚀**
