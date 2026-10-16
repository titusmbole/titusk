# 💻 Terminal Portfolio - Titus Mbole

An interactive, modern portfolio website styled as a terminal interface. Users can explore my professional journey, skills, projects, and experience through an engaging command-line interface.

## ✨ Features

### 🖥️ Interactive Terminal
- **Full Terminal Emulation**: Type commands to explore portfolio content
- **Command History**: Navigate through previous commands using ↑/↓ arrow keys
- **Auto-complete Suggestions**: Smart command suggestions
- **Real-time Feedback**: Instant response to commands

### 🎯 Available Commands

```bash
help        # Display all available commands
about       # Learn more about me
skills      # View technical skills and expertise
experience  # Browse work experience and career journey
education   # View educational background
projects    # Explore featured projects
contact     # Get contact information
social      # View social media links
resume      # Download CV/Resume
whoami      # Display current user
date        # Show current date and time
clear       # Clear terminal screen
github      # Open GitHub profile
linkedin    # Open LinkedIn profile
```

### 🎨 Modern Design Elements
- **Particle Background**: Dynamic animated background
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Design**: Optimized for all screen sizes
- **Terminal Aesthetics**: 
  - Classic terminal colors (emerald green, yellow, blue)
  - Scanline effects
  - Blinking cursor
  - Monospace fonts

### 📱 Sections

1. **Hero Section**: Animated terminal intro with typing effect
2. **About**: Professional summary with quick stats
3. **Skills**: Categorized technical skills
   - Core Technologies
   - Development Tools
   - Backend & Database
4. **Experience**: Timeline of professional experience
5. **Projects**: Featured projects with descriptions
6. **Contact**: Contact form and social links

### 🚀 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Particles**: tsparticles
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🛠️ Setup and Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd titusk

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Project Structure

```
src/
├── components/
│   ├── Terminal.tsx              # Main terminal component
│   ├── TerminalHero.tsx          # Hero section with typing animation
│   ├── FloatingTerminalButton.tsx # Floating terminal access button
│   └── ParticlesBackground.tsx   # Animated background
├── App.tsx                        # Main application component
├── index.css                      # Global styles and animations
└── main.tsx                       # Application entry point
```

## 🎯 Key Features Implementation

### Terminal Command System
The terminal component processes user input and returns formatted responses based on the command entered. It maintains a history of commands and outputs.

### Floating Terminal Button
A persistent button that provides quick access to the terminal from any section of the portfolio.

### Responsive Navigation
Smooth scroll navigation with active section highlighting and mobile-friendly design.

### Custom Animations
- Typing effect for terminal introduction
- Fade-in animations for sections
- Hover effects on interactive elements
- Scanline effects for authentic terminal feel

## 🎨 Color Scheme

- **Primary**: Emerald Green (#10b981)
- **Secondary**: Blue (#3b82f6)
- **Accent**: Yellow (#facc15)
- **Background**: Dark Gray (#111827, #1f2937)
- **Text**: White/Light Gray

## 📝 Customization

To customize the portfolio for your use:

1. Update personal information in `Terminal.tsx` commands
2. Modify projects data in `App.tsx`
3. Update experience timeline in `App.tsx`
4. Change social links in contact section
5. Replace `cv.pdfpdf.pdf` with your resume
6. Update `logo.jpg` with your photo

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌟 Highlights

- **Interactive Experience**: Unique terminal-based navigation
- **Modern & Professional**: Clean design with smooth animations
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **Fast Performance**: Built with Vite for optimal loading
- **Type-Safe**: Written in TypeScript
- **Accessible**: Keyboard navigation support

## 📧 Contact

For questions or collaboration opportunities:
- Email: titus.eddys@gmail.com
- GitHub: [@titusmbole](https://github.com/titusmbole)
- LinkedIn: [Titus Kilunda](https://www.linkedin.com/in/titus-mbole-2aa53b408/)

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
# titusk
