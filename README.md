# ❌⭕ XO Game API (Backend)

A modern and scalable XO (Tic-Tac-Toe) backend API built with Express.js + TypeScript + MongoDB.
Designed to handle authentication, game logic, and score tracking for XO Game frontend.

---

## 🚀 Features

🎮 XO (Tic-Tac-Toe) game logic
🔐 Authentication with JWT
🧠 Game state & turn management
🏆 Score & point system
📊 Leaderboard / ranking system
⚡ RESTful API architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
- JWT
- REST API

---

## ✅ Requirements

- Node.js v18+ (LTS)
- npm or yarn
- MongoDB (Local or Atlas)

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/tenpcr/xo-api.git
cd xo-api
```

---

## 📦 Install dependencies

```bash
npm install
# or
yarn install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory

```bash
PORT=4000
MONGO_URI=
SECRET=
```

---

## 🚀 Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Server will start at 👉 http://localhost:4000

---

## 🏗 Build for Production

```bash
npm run build
npm run start
```

---

## 🔄 API Endpoints

Backend provides REST APIs for XO Game frontend

Auth

- POST /auth/sync

Score & Ranking

- GET /game/ranks
- GET /game/point/:id
- PUT /game/point/add
- PUT /game/point/remove

---

## 🧠 Game Logic Overview

- Players take turns (X / O)
- Draw when board is full
- Win 3 games in a row to earn +1 bonus poin
- Winner gets +1 point
- Loser gets −1 point (if applicable)

---

## 👨‍💻 Author

- tenpcr  
- Full Stack Developer