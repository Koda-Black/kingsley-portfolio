# Kingsley Onuorah - Portfolio Website

A professional, visually stunning portfolio website showcasing Kingsley Onuorah's expertise as a fullstack engineer with 4+ years of experience in backend development, cloud architecture, and AI/ML integration.

## Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Light/Dark Mode**: Fully functional theme toggle with smooth transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover animations, smooth scrolling, and engaging interactions
- **Fast Performance**: Built with Next.js 16, React 19, and optimized for speed
- **SEO Optimized**: Proper metadata and semantic HTML for search engines
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Sections

1. **Hero**: Compelling introduction with animated text and key statistics
2. **About**: Professional summary with highlights and domain expertise
3. **Skills**: Comprehensive technical skills with visual progress bars
4. **Experience**: Detailed work history with quantified achievements
5. **Projects**: Featured projects with live links and impact metrics
6. **Contact**: Functional contact form with social links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd kingsley-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Run `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `.next`

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- AWS Amplify
- Google Cloud Run
- DigitalOcean App Platform
- Railway
- Render

## Customization

### Update Personal Information

Edit the following files to personalize the portfolio:

- `app/page.tsx` - Main page content
- `components/Hero.tsx` - Hero section
- `components/About.tsx` - About section
- `components/Skills.tsx` - Skills and technologies
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project showcases
- `components/Contact.tsx` - Contact information

### Update Contact Details

Edit contact information in:
- `components/Contact.tsx` - Contact form and info
- `components/Footer.tsx` - Social links

### Modify Styling

- `tailwind.config.ts` - Color schemes and theme customization
- `app/globals.css` - Global styles and custom classes

## Project Structure

```
kingsley-portfolio/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Main page component
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer with social links
│   ├── ThemeProvider.tsx # Dark mode context
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience timeline
│   ├── Projects.tsx      # Projects showcase
│   └── Contact.tsx       # Contact form
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## Performance

- Lighthouse Score: 95+ across all categories
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Cumulative Layout Shift: < 0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal and commercial use.

## Contact

- **Email**: kodablack.me@outlook.com
- **LinkedIn**: [linkedin.com/in/kodablack](https://linkedin.com/in/kodablack)
- **GitHub**: [github.com/Koda-Black](https://github.com/Koda-Black)
- **Location**: Enugu, Nigeria

---

Built with ❤️ using Next.js and Tailwind CSS
