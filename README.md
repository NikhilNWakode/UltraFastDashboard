# 🚀 Ultra-Fast React Dashboard (Batch API + 12 Widgets)

A lightning-fast, production-grade analytics dashboard built with a **single batch API**, **React 19**, **TanStack Query**, **Recharts**, **TailwindCSS**, and **virtualized tables**.

This project demonstrates real-world engineering skills that companies look for: 

✔ Batching  
✔ Caching  
✔ Virtualization  
✔ Performance  
✔ Clean architecture  
✔ Modular services  
✔ Modern UI/UX  

Live Demo → **https://ultra-fast-dashboard-dv66g4h01-nikhil-wakodes-projects.vercel.app/**  
API → **https://ultrafastdashboard.onrender.com**

---

## ✨ Features

### ⚡ Backend (Node + Express)
- Single **/batch** endpoint serving all widgets  
- Fast mock database (`db.json`)  
- Modular service/controller routing  
- CORS enabled  
- Production-ready tree  
- Extendable for real databases  

### 🎨 Frontend (React 19 + Vite)
- Ultra-fast data loading with **TanStack Query v5**  
- **12 premium widgets:**
  - Users  
  - Revenue  
  - Orders  
  - Notifications  
  - Sessions  
  - Conversion Rate  
  - Sales Chart (Line)  
  - Top Products Chart (Bar)  
  - Active Users (Pie)  
  - System Health  
  - Weather  
  - Currency  
  - Recent Transactions (Virtualized)  
- Featherweight components  
- Responsive grid  
- Professional dashboard UI  
- Smooth skeletons for loading  
- Error-safe states  

---

## 📁 Project Structure

<img width="332" height="593" alt="image" src="https://github.com/user-attachments/assets/280494d1-109b-44ad-b3e7-521b31ad8ba3" />



---

## 🔧 Installation & Setup

### 1. Clone the repository

```sh
git clone https://github.com/YOUR_USERNAME/UltraFastDashboard.git
cd UltraFastDashboard

Backend Setup
cd backend
npm install

Create a .env file:
PORT=3000
NODE_ENV=development

Run backend:
npm run dev


API will be available at:
http://localhost:3000/batch

Frontend Setup
cd frontend
npm install

Create .env:
VITE_API_URL=http://localhost:4000

Run frontend:
npm run dev
