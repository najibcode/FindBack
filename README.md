# 🔍 FindBack – AI-Powered Lost & Found Platform

FindBack is a modern, premium, web application designed to help community members easily report, track, and recover lost belongings. The application simulates an intelligent matching engine that automatically cross-references lost and found reports, providing real-time alerts, match percentages, and a cohesive user experience.

The visual brand identity and design patterns of the platform are inspired by the purple and gold branding of **Rajalakshmi Engineering College**.

---

## ✨ Key Features

- **智能 AI Matching Simulation:** Automatically scans reports to find potential matches, showing a circular percentage indicators and trigger alerts.
- **Floating Pill Navigation Bar:** Redesigned responsive navigation bar featuring fluid hover states, pill-shaped active links, and rounded buttons.
- **Multi-Step Reporting Workflows:** Step-by-step wizard forms for reporting lost and found items, complete with input validation and progress trackers.
- **Premium User Dashboard:** Displays active reports, messaging counters, a circular match percentage widget, and pulsing notification indicators.
- **Modern Glassmorphic UI:** High-fidelity layouts utilizing CSS backdrop-filter blur effects, soft tinted drop-shadows, and smooth interactive transformations.
- **Fully Responsive Design:** Tailored layouts optimised for desktops, tablets, and mobile screens.

---

## 🛠️ Technology Stack

- **Framework:** [React.js](https://react.dev/) (v19) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3) + CSS3 Glassmorphism
- **Routing:** [React Router Dom](https://reactrouter.com/) (v7)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Assets Pipeline:** Python (Pillow library for image asset transparency processing)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or above) installed on your system.

### Installation

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

---

## 🔐 Mock Credentials

To test the login flow, you can use any username/password combination:
- **Email/ID:** `admin@findback.com` (or any other email format)
- **Password:** `admin123` (or any other password)

---

## 🎨 Design System & Color Tokens

Defined in `tailwind.config.js`:
- **Primary (Purple):** `#6A1B9A` (Rajalakshmi Royal Purple)
- **Primary Hover:** `#5A1582`
- **Accent (Gold):** `#D97706` (Vibrant Amber/Gold)
- **Accent Hover:** `#B45309`
- **Surface:** `#F7F5FF` (Light Violet Tint)
- **Background:** `#FFFFFF` (Clean White)
