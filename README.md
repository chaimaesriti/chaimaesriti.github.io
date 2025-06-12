# The Last Living Data Scientist

A sleek, minimalist portfolio website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Ultra-clean, minimalist aesthetic
- **Responsive**: Works perfectly on all devices
- **Fast**: Built with Next.js for optimal performance
- **Customizable**: Easy to personalize and update
- **Blog Ready**: Built-in blog section for your thoughts

## 🛠 Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Inter Font** - Clean, modern typography

## 📦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Content
- Edit `pages/index.tsx` for the homepage
- Add your projects in the projects section
- Customize the about section with your information
- Update contact information

### Styling
- Colors are defined in `tailwind.config.js`
- Global styles in `styles/globals.css`
- Component-specific styles use Tailwind classes

### Images
- Replace placeholder images with your actual project screenshots
- Add your profile photo to the about section

## 📁 Project Structure

```
├── components/          # Reusable React components
├── pages/              # Next.js pages
├── styles/             # Global CSS styles
├── public/             # Static assets
└── README.md          # This file
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **GitHub Pages**: Use `next export` for static generation

## 📝 Blog Posts

To add blog posts:
1. Create markdown files in a `posts/` directory
2. Use a library like `gray-matter` to parse frontmatter
3. Create dynamic routes for individual posts

## 🎯 SEO

- Update meta tags in each page's `Head` component
- Add structured data for better search visibility
- Optimize images with Next.js Image component

## 📄 License

This project is open source. Feel free to use and customize as needed.

---

**Built for data scientists surviving the AI apocalypse** 🤖 