# 🔍 FindBack – AI-Powered Lost & Found Platform

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.13.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.2-F1F?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

FindBack is a premium, web application designed to help community members easily report, track, and recover lost belongings. The application simulates an intelligent matching engine that automatically cross-references lost and found reports, providing real-time alerts, match percentages, and a cohesive user experience.

The visual brand identity and design patterns of the platform are inspired by the purple and gold branding of **Rajalakshmi Engineering College** (`rajalakshmi.org`).

---

## ✨ Key Features

- **🧠 Intelligent AI Matching Simulation:** Automatically scans reports to find potential matches, showing circular percentage indicators and status alerts.
- **💊 Floating Pill Navigation Bar:** A responsive navigation bar featuring fluid hover states, pill-shaped active links, and rounded buttons themed in Rajalakshmi colors.
- **📋 Multi-Step Reporting Workflows:** Step-by-step wizard forms for reporting lost and found items, complete with input validation and progress trackers.
- **📊 Premium User Dashboard:** Displays active reports, messaging counters, a circular match percentage widget, and pulsing notification indicators.
- **🔮 Modern Glassmorphic UI:** High-fidelity layouts utilizing CSS backdrop-filter blur effects, soft tinted drop-shadows, and smooth interactive transformations.
- **📱 Fully Responsive Design:** Tailored layouts optimized for desktops, tablets, and mobile screens.

---

## 📂 Directory Structure

```text
FindBack/
├── public/                 # Static assets (favicons, transparent icons)
│   ├── logo.svg            # Rajalakshmi Official Logo
│   └── R.png               # Transparent R icon (Favicon)
├── src/
│   ├── components/
│   │   └── Navbar.jsx      # Floating navigation component with responsive mobile menu
│   ├── pages/
│   │   ├── Auth.jsx        # Login & Signup screen with mock credential handling
│   │   ├── Dashboard.jsx   # Stats widget, notification feed, and matching items
│   │   ├── Home.jsx        # Landing page with category buttons, stats, and search bar
│   │   ├── HowItWorks.jsx  # Interactive workflow visualizer
│   │   ├── ReportFound.jsx # Form wizard to report items found in the community
│   │   └── ReportLost.jsx  # Form wizard to report items lost in the community
│   ├── index.css           # Global custom classes (backdrop filter blur, etc.)
│   ├── main.jsx            # React mounting and entry point
│   └── tailwind.config.js  # Theme configuration for Rajalakshmi Purple & Gold colors
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Build configuration
```

---

## 🎨 Design System & Color Tokens

Defined in `tailwind.config.js`:
* **Primary (Purple):** `#6A1B9A` (Rajalakshmi Royal Purple) — Used for core branding elements, buttons, and navigation bar.
* **Primary Hover:** `#5A1582` — Used for active interaction states.
* **Accent (Gold):** `#D97706` (Vibrant Amber/Gold) — Inspired by the gold accents of the college logo.
* **Accent Hover:** `#B45309` — Used for highlight states.
* **Surface:** `#F7F5FF` (Light Violet Tint) — Used for cards and layout sections to prevent contrast issues.
* **Background:** `#FFFFFF` (Clean White) — Base canvas color.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or above) installed on your system.

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/najibcode/FindBack.git
   cd FindBack
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 🔐 Mock Credentials

To test the dashboard access, use the following credentials on the Login page:
* **Email/ID:** `admin@findback.com` (or any valid email format)
* **Password:** `admin123` (or any password)

---

## 📄 License

This project is licensed under the MIT License.
