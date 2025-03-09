# Market Pulse Setup Guide

Follow these steps to set up and run the Market Pulse project.

---

## 1. Clone the Repository

```bash
git clone https://github.com/Shaganashree97/market-pulse.git
cd market-pulse
```

## 2. Install Dependencies

Install all necessary packages:

```bash
npm install
npm install react-router-dom
npm install express body-parser cors
```

## 3. Start the Servers

### Frontend (Vite + React)

Start the Vite development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend (Express)

In a separate terminal, run:

```bash
npm run server
```

This will start the backend at [http://localhost:5000](http://localhost:5000).

## 4. Using the Application

- **Register:** Navigate to `/register` to create a new account.
- **Login:** Go to `/login` to sign in. On successful login, you'll be redirected to the landing page.
- **Navigation:** The landing page features a responsive sidebar. Use the buttons to navigate to:
  - **Page One**
  - **Page Two**
  - **Page Three**

## 5. Project Structure

```bash
market-pulse/
├── package.json           # Project configuration and dependencies
├── vite.config.js         # Vite configuration
├── server/                # Express backend
│   └── server.js          # API endpoints for register and login
└── src/                   # React frontend
    ├── main.jsx           # React entry point
    ├── App.jsx            # App routing configuration
    ├── index.css          # Global styles (modern, responsive)
    └── pages/             # Application pages/components
         ├── Login.jsx     # Login page
         ├── Register.jsx  # Registration page
         ├── Landing.jsx   # Landing page with sidebar navigation
         ├── PageOne.jsx   # Navigation Page One
         ├── PageTwo.jsx   # Navigation Page Two
         └── PageThree.jsx # Navigation Page Three
```

