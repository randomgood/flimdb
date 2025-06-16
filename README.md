# 🎬 FilmDB

[![Made with Vite](https://img.shields.io/badge/Made%20with-Vite-646CFF.svg?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![YouTube Tutorial](https://img.shields.io/badge/Tutorial-TechWithTim-red.svg?logo=youtube)](https://www.youtube.com/watch?v=G6D9cBaLViA)

**FilmDB** is a React-based movie browser application built for learning purposes by following [Tech With Tim's tutorial](https://www.youtube.com/watch?v=G6D9cBaLViA). It fetches data from the IMDb API via RapidAPI and showcases the use of modern React concepts.

> 💡 Free tier: IMDb API via RapidAPI offers 500 API calls/month.

---

## 🔍 Features

### ✅ Home Page
- Displays the **Top 250 popular movies** using IMDb's `Popular_movies` endpoint.
- Includes a **search bar with autocomplete** using the `Search` endpoint.
- Add movies to **Favourites** from this list.

### ❤️ Favourites Page
- Lists only the movies marked as favourites.
- **Favourites persist in `localStorage`** across browser sessions.

---

## 🧱 Built With

| Tool / Library     | Purpose                                        |
|--------------------|------------------------------------------------|
| [Vite](https://vitejs.dev/)          | Fast build tool for development           |
| [React](https://reactjs.org/)        | Building the UI as a SPA (Single Page App)|
| [React Router](https://reactrouter.com/) | Handles client-side routing                |

---

## 🔧 Core Concepts Used

### `useEffect`
- Load popular movies when the homepage mounts.
- Retrieve favourite movies from `localStorage`.

### `Context API`
- Share the **favourites list** between pages without prop drilling.

### `localStorage`
- Persist user’s favourite movie selections.

### `React Router`
- Navigate between **Home** and **Favourites** routes.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/randomgood/filmdb.git

# Go into the project directory
cd filmdb

# Install dependencies
npm install

# Start development server
npm run dev
