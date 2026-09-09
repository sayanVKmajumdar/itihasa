# 🏛️ Itihāsa — Comprehensive Indian History Platform

> An interactive full-stack web application designed to chronicle Indian history across Ancient, Medieval, and Modern eras, featuring custom visual artwork and database integration.

---

## 📊 Project Overview

**Itihāsa** addresses the challenge of exploring complex historical timelines through a modern, engaging digital platform. The goal was to build a performant, database-backed web application with a paper-parchment visual theme and seamless user navigation.

1. **Why?** Present Indian history through an intuitive, structured, and visually rich digital experience.
2. **How?** Leveraged Next.js App Router, TypeScript, and Drizzle ORM paired with PostgreSQL for modern full-stack performance.
3. **What?** Delivered an interactive timeline, era-specific content cards, and custom-generated artwork.

---

## 🔧 Tech Stack

| Layer | Tool / Technology |
|-------|------------------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database & ORM** | PostgreSQL & Drizzle ORM |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

---

## 🔑 Key Features

| # | Feature | Impact / Purpose |
|---|---------|------------------|
| 1 | **Full-Stack Architecture** | Server-Side Rendering (SSR) for fast initial loads & SEO optimization |
| 2 | **Drizzle ORM & PostgreSQL** | Efficient, type-safe database queries for historical data |
| 3 | **Parchment UI Design** | Rich historical aesthetic tailored for desktop and mobile screens |
| 4 | **Era-Based Categorization** | Seamless browsing through Ancient, Medieval, and Modern periods |
| 5 | **Custom AI Artwork** | Visually immersive headers and card covers for each era |

---

## 📁 Project Structure

```text
itihasa/
├── public/
│   └── images/                       ← Custom historical illustrations
│       ├── era-ancient.jpg
│       ├── era-medieval.jpg
│       ├── era-modern.jpg
│       └── hero.jpg
│
├── src/
│   ├── app/                          ← Next.js App Router pages & layouts
│   └── components/                   ← Reusable UI components
│
├── drizzle.config.json               ← Drizzle ORM database configuration
├── next.config.ts                    ← Next.js runtime configuration
├── package.json                      ← Dependencies & npm scripts
└── README.md

🖼️ Visual Showcase
Era Collections & Interactive Cards
High-resolution historical art representing key milestones in Indian history.

Ancient Era (c. 2,000,000 BCE – 750 CE): Harappan culture, Vedic scriptures, and early empires.

Medieval Era (c. 750 – 1757 CE): Regional kingdoms, architectural wonders, and cultural shifts.

Modern Era (c. 1498 – 1950 CE): Colonial history, trade routes, and the struggle for independence.

🚀 How to Run Locally
Prerequisites
Node.js (v18.0 or higher)

npm or yarn

Installation
Bash
# Clone the repository
git clone [https://github.com/sayanVKmajumdar/itihasa.git](https://github.com/sayanVKmajumdar/itihasa.git)
cd itihasa

# Install dependencies
npm install
Configure Environment Variables
Create a .env.local file in the root folder and add your database URL:

Code snippet
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres"
Run Development Server
Bash
npm run dev
Open http://localhost:3000 in your browser.

📚 Technical Takeaways
Next.js App Router Efficiency: Implementing server components significantly improves page load times and data fetching efficiency.

Static Asset Optimization: Standardizing image paths (public/images/) and handling Next.js image optimization settings ensures reliable deployment on Vercel.

Type-Safe Database Management: Integrating Drizzle ORM with PostgreSQL provided end-to-end TypeScript safety from database schemas to client UI.

👤 Author
Sayan Majumdar

📧 Email: majumdarp428@gmail.com

💼 LinkedIn: Sayan Majumdar

🌐 GitHub: sayanVKmajumdar

📄 License
This project is open-source and available under the MIT License.
