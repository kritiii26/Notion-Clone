# Notion Clone WAP Project

Welcome to the **Notion Clone** project! This repository contains a lightweight, responsive, and highly simplified clone of the core Notion web application. It was built with a focus on simplicity, minimal dependencies, and readable code.

## 🚀 Project Overview

The goal of this project is to recreate the essential look and feel of Notion using bare-bones web technologies. It is divided into two main parts:
1. **The Landing Page**: A beautifully simplified, dark-themed marketing page that mimics Notion's homepage.
2. **The Dashboard (App)**: A functional React-based interface representing the user workspace, complete with a sidebar, top navigation, and task cards.

## ✨ Key Features

- **High-Fidelity UI Recreation**: The layout, spacing, and typography have been closely matched to Notion's clean aesthetic.
- **Dynamic Theme Toggling**: The dashboard features a seamless Dark/Light Mode switch. This is powered by React's `useState` hook and leverages CSS variables to instantly update the entire application's color scheme without reloading the page.
- **Zero-Boilerplate Landing Page**: The `index.html` file runs entirely on its own with no build step required, demonstrating the power of pure structural HTML and CSS.

## 🛠 Tech Stack

We intentionally kept the technology stack lean to focus on core web fundamentals:
- **HTML5**: For semantic and structural layout.
- **Simple CSS**: For styling, layout (Flexbox/Grid), and theme variable management. We avoided complex frameworks and opted for straightforward Simple CSS to keep the design system accessible.
- **React 18**: Used strictly for component structure and localized state management (`useState`) in the interactive dashboard.
- **Vite**: Integrated as the lightning-fast build tool and local development server for the React portions of the application.

## 📦 Getting Started

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:kritiii26/Study-Planner-Task-Tracker.git
   ```
2. **Navigate to the directory and install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **View the application:**
   Open your browser and navigate to the localhost URL provided by Vite (typically `http://localhost:5173/notion.html`) to see the interactive dashboard. You can also view the landing page at `http://localhost:5173/`.
 
 
