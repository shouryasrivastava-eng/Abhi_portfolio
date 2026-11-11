# Abhi Srivastava - Personal Portfolio

A modern, clean, and fully responsive personal portfolio website crafted with semantic HTML5, modern Tailwind CSS, Lucide Icons, and Vanilla JavaScript. Built with a sleek dark-mode aesthetic (slate/zinc palette with glowing indigo/blue accents).

![Portfolio Preview Banner](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80)

---

## ✨ Features

- **Modern Dark-Mode Aesthetic**: Slate/zinc background (`#090d16`) with clean white typography and subtle blue/indigo accents.
- **Ambient Lighting & Mesh Grid**: Subtle CSS glows and ambient dotted/grid overlays that give high-end modern tech presence.
- **Responsive Sticky Navigation**:
  - Desktop: Glassmorphism header with active link scroll-spy and quick "Hire Me" / "Resume" triggers.
  - Mobile: Clean hamburger menu with animated drawer navigation.
- **Dynamic Hero Section**:
  - Animated live typing effect cycling through key specializations.
  - Availability pill indicator ("🟢 Available for new opportunities").
  - Quick social links (GitHub, LinkedIn, Twitter/X, Email) with one-click clipboard copying.
- **Interactive About Me**:
  - Core philosophy cards (Performance First, Clean & Modular, Modern UX).
  - Career metric highlights (Years of experience, projects shipped, uptime).
- **Interactive Skills Section**:
  - Filterable tabs: *All Stack*, *Frontend*, *Backend & APIs*, *Databases*, and *DevOps & Tools*.
  - Visual mastery indicators and clean Lucide iconography.
- **Featured Projects**:
  - 3 showcase projects with tech stack badges, custom mockup graphics, "Live Demo", and "Code" buttons.
- **Interactive Contact Section**:
  - Direct contact cards (Location, Email with 1-click copy, Status).
  - Contact form with client-side validation and toast notifications.
- **Resume Modal**: Interactive resume summary dialog with print trigger and PDF request action.

---

## 📁 Project Structure

```
abhi-portfolio/
├── index.html        # Main semantic single-page layout
├── styles.css        # Custom styles, animations, ambient grid & scrollbars
├── script.js         # Dynamic typing, mobile menu, filtering, form validation & modals
└── README.md         # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

You can run this project with any local static HTTP server or open `index.html` directly in your browser.

### Option 1: Using Python (Recommended)
```bash
cd /Users/abhi/.gemini/antigravity/scratch/abhi-portfolio
python3 -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option 2: Using Node.js `npx serve`
```bash
npx serve /Users/abhi/.gemini/antigravity/scratch/abhi-portfolio
```

### Option 3: Direct Browser Launch
Open `index.html` directly in Google Chrome, Safari, or Firefox.

---

## 🛠 Customization

1. **Personal Information**:
   - Update your email, social profile links, and location in `index.html`.
2. **Projects**:
   - Replace the project descriptions, live demo links, and GitHub URLs in the `<section id="projects">` block.
3. **Resume PDF**:
   - Place your real `resume.pdf` in the folder and update the button link or modal in `index.html`.

---

## 🌐 Free Deployment Options

- **GitHub Pages**: Push this directory to a GitHub repository and turn on Pages in `Settings -> Pages -> Deploy from branch (main)`.
- **Vercel**: Run `vercel` in this folder or link your GitHub repo.
- **Netlify**: Drag and drop the folder into Netlify Drop or run `netlify deploy`.
