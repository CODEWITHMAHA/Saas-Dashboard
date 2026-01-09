# SaaS Dashboard - Modern Admin Panel

A beautiful, responsive, and fully-featured SaaS dashboard built with **React**, **Vite**, **Tailwind CSS**, and **shadcn/ui**. Perfect for admin panels, analytics dashboards, or any modern web application.

Live Demo: (Deployed soon on Vercel/Netlify)

## Features

- **Authentication**  
  - Login & Signup pages with form validation  
  - Fake JWT authentication using localStorage  
  - Protected routes (redirect to login if not authenticated)  
  - Logout functionality

- **Responsive Layout**  
  - Sidebar navigation (collapsible on mobile)  
  - Top navbar with theme toggle and user avatar  
  - Fully mobile-friendly design

- **Dark / Light Mode**  
  - System preference detection  
  - Manual toggle with persistence (localStorage)  
  - Smooth transitions

- **Dashboard Page**  
  - 4 key stats cards (Revenue, Users, Growth, Active Now)  
  - Revenue Line Chart (Recharts)  
  - User Growth Area Chart (Recharts)  
  - Loading skeletons for better UX

- **Users Management Page**  
  - Table with search, role filter, and pagination  
  - Avatar with initials  
  - Responsive design

- **Analytics Page**  
  - Advanced charts: Bar, Pie, and Funnel  
  - Key metrics with trend indicators  
  - Traffic sources and conversion insights

- **Settings Page**  
  - Update profile (name, email)  
  - Change avatar (upload image with preview and compression)  
  - Theme toggle  
  - Notification preferences  
  - Danger zone (delete account stub)

- **Performance Optimized**  
  - Code splitting with React.lazy & Suspense  
  - Memoized charts and data  
  - Loading skeletons and spinners  
  - Optimized bundle size

- **Fake Backend**  
  - JSON Server for dummy REST API  
  - Dynamic data fetching for charts and users

## Tech Stack

- **React 18** + **Vite** (JavaScript)
- **Tailwind CSS** + **shadcn/ui** components
- **Recharts** for beautiful charts
- **React Router v6** for routing
- **lucide-react** icons
- **JSON Server** as mock backend

## Project Structure

```
saas-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── auth/           # Auth components
│   │   ├── charts/         # Optimized Recharts components
│   │   ├── layout/         # Sidebar, Navbar, MainLayout
│   │   └── Loader.jsx      # Global loading spinner
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── UserContext.jsx # For user profile & avatar sync
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Analytics.jsx
│   │   ├── Settings.jsx
│   │   └── auth/
│   │       ├── Login.jsx
│   │       └── Signup.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json                 # Mock database for JSON Server
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/saas-dashboard.git
cd saas-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start JSON Server (mock backend)
```bash
npm run server
```
Runs on `http://localhost:3001`

4. Start the development server
```bash
npm run dev
```
Runs on `http://localhost:5173`

5. (Optional) Run both servers together
```bash
npm run dev:full
```

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

- Change logo/text in Sidebar (`SaaS Dash`)
- Update colors in `tailwind.config.js` and CSS variables
- Add real backend (replace fetch calls)
- Connect to Supabase, Firebase, or your API

## Deployment

Recommended: **Vercel** or **Netlify** (free and easy)

1. Push to GitHub
2. Connect repository to Vercel/Netlify
3. Deploy — done!

## Lighthouse Scores (Optimized Build)

- **Mobile**: ~80–90  
- **Desktop**: ~95–100  

(Thanks to lazy loading, memoization, and skeletons)

## Credits

Built with ❤️ by **Maha**  
Inspired by modern SaaS tools like Vercel, Stripe, and Plausible.

---

**Enjoy your professional SaaS dashboard!**  
Feel free to use it for portfolios, freelance projects, or as a starter template.

Happy coding! 🚀✨
