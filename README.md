<div align="center">
<img width="1200" height="475" alt="biharihaiji_" src="https://images.unsplash.com/photo-1606471191009-63994c53433b?w=1200&auto=format&fit=crop" />
</div>

# biharihaiji_ 🥘

A modern, responsive portfolio website for **biharihaiji_** - showcasing authentic Bihari cuisine and viral recipes on Instagram.

**Follow on Instagram:** [@biharihaiji_](https://www.instagram.com/biharihaiji_/)

## 📱 Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Viral Posts Gallery** - Display your top Instagram reels:
  - छठ महापर्व - Kharna (Chhath Mahaparv Day 2)
  - Tissi Ki Chatni (Lost flavors, forgotten memories)
  - 🌸 Navratri Special: Khoichha 🌸
- **Direct Links to Instagram** - All posts link directly to your Instagram reels
- **Collaboration Section** - Contact form for brand collaborations
- **Social Media Integration** - Easy follow buttons and DM links
- **Modern UI** - Built with React, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Google Generative AI** - AI integration (optional)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aakash-gith/biharihaiji_.git
cd biharihaiji_
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000/`

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── components/           # React components
│   ├── Header.tsx       # Navigation header with logo
│   ├── Hero.tsx         # Hero section with CTA
│   ├── ViralPosts.tsx   # Instagram reels gallery
│   ├── Collab.tsx       # Collaboration section
│   └── ...
├── services/            # API services
│   └── geminiService.ts # AI integration
├── public/              # Static assets
│   └── logo.jpg        # biharihaiji_ logo
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── types.ts            # TypeScript interfaces
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

### Update Logo

Replace the logo image at `public/logo.jpg` with your own image file.

### Update Posts

Edit the `posts` array in `components/ViralPosts.tsx` to add or modify viral posts with your Instagram reel links.

### Update Colors

The app uses Tailwind CSS with custom brand colors. Modify the color scheme in `tailwind.config.js` or update class names in components.

### Update Social Links

Update Instagram links throughout the components:

- Header: `components/Header.tsx`
- Collab: `components/Collab.tsx`

## 📊 Instagram Integration

All posts link directly to your Instagram reels:

1. **Post 1** - [छठ महापर्व - Kharna](https://www.instagram.com/biharihaiji_/reel/DQMfdhfE-ou/)
2. **Post 2** - [Tissi Ki Chatni](https://www.instagram.com/biharihaiji_/reel/DQvvPJKk4H5/)
3. **Post 3** - [🌸 Navratri Special: Khoichha 🌸](https://www.instagram.com/biharihaiji_/reel/DPIRF1BE_AE/)

## 📞 Contact & Collaboration

- **Instagram:** [@biharihaiji_](https://www.instagram.com/biharihaiji_/)
- **Email:** contact@biharihaiji_.com
- **Location:** Bihar, India

## 📈 Stats

- **Instagram Followers:** 150K+
- **Monthly Reach:** 2.5M+
- **Content Focus:** Authentic Bihari Cuisine & Cultural Recipes

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the portfolio.

## 📄 License

This project is open source and available under the MIT License.

## ⚡ Performance Tips

- The app uses Vite for fast development and optimized production builds
- Images are optimized and lazy-loaded
- CSS is purged and minified in production
- The site is fully responsive and mobile-friendly

## 🔗 Links

- **Live Site:** https://biharihaiji_.vercel.app (deploy when ready)
- **GitHub Repository:** https://github.com/Aakash-gith/biharihaiji_
- **Instagram Profile:** https://www.instagram.com/biharihaiji_/

---

<div align="center">
Made with ❤️ for Bihari Cuisine Enthusiasts
</div>
