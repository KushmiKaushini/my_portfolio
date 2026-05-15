# Kushmi Kaushini - Portfolio Website (React)

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and experience as an Android Developer.

## 🚀 Features

- **Smooth Navigation**: Fixed header with smooth scrolling between sections
- **Typing Effect**: Dynamic hero text animation
- **Project Cards**: Interactive flip animation for project details
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Contact Form**: Built-in contact form with validation
- **Modern Stack**: Built with React 18, Vite, and modern CSS

## 📋 Sections

- **Hero**: Eye-catching introduction with typing animation
- **About**: Personal introduction and professional summary
- **Skills**: Technical skills organized by category
- **Projects**: Showcase of 5 major projects with flip animation
- **Education**: Educational background and focus areas
- **Strengths**: Key strengths and achievements
- **Contact**: Contact information and message form

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins)
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🏗️ Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Strengths.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/             # Component styles
│   ├── global.css
│   ├── header.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── projects.css
│   ├── education.css
│   ├── strengths.css
│   ├── contact.css
│   └── footer.css
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## 🎨 Customization

### Update Personal Information

Edit the component files to update:
- Name and title in `Hero.jsx`
- About content in `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Contact details in `Contact.jsx`

### Colors

Update CSS variables in `src/styles/global.css`:
```css
:root {
    --primary-color: #4e54c8;
    --secondary-color: #8f94fb;
    --accent-color: #ff3366;
    /* ... more variables */
}
```

### Profile Picture

Replace the placeholder image in `Hero.jsx` with your actual profile picture.

## 📞 Contact

- **Email**: kushmi1428@gmail.com
- **Phone**: +94 78-841-3056
- **GitHub**: https://github.com/KushmiKaushini
- **LinkedIn**: linkedin.com/in/kushmi-kaushini

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Migration Notes

This portfolio has been migrated from vanilla HTML/CSS/JavaScript to React for:
- Better component reusability
- Improved state management
- Enhanced form handling
- Better developer experience
- Easier maintenance and updates

---

**Created**: May 2025
**Version**: 1.0.0 (React)
