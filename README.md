# 📊 QuantIQ Dashboard

A sleek, mobile-responsive Quant AI Dashboard for tracking real-time ETF prices, account summary, and future AI-powered financial modules.

## 🚀 Live Demo

👉 [Click here to view it live](https://quantiq-dashboard.vercel.app/)  
_(Hosted on Vercel – auto-deploys on every push)_

---

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Data**: [Yahoo Finance (via `yahoo-finance2` npm)](https://www.npmjs.com/package/yahoo-finance2)

---

## 📦 Features

- Live ETF price cards (e.g., SPY, QQQ, VTI)
- Clean layout with responsive Tailwind components
- API routing via `app/api/yfinance`
- Mobile & desktop optimized
- Modular codebase for future:
  - Smart Portfolio Doctor
  - Option Greeks Risk Tracker
  - AI-powered signals

---

## 🛠️ Run Locally

```bash
git clone https://github.com/raysah/quantiq-dashboard.git
cd quantiq-dashboard/frontend
npm install
npm run dev