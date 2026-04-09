#SixtwoGo

A modern full-stack web application built with **Next.js**, **React**, and **Tailwind CSS**, powered by **Supabase** for backend services and **Stripe** for secure payments.

🌐 Live Demo: https://sixtwogo.vercel.app

---

## ✨ Features

* ⚡ Fast UI with Next.js & React
* 🎨 Clean styling using Tailwind CSS
* 🔐 Authentication and database powered by Supabase
* 💳 Secure payments integration with Stripe
* ☁️ Deployed on Vercel

---

## 🛠️ Tech Stack

**Frontend**

* Next.js
* React
* Tailwind CSS

**Backend / Services**

* Supabase (Database + Auth)

**Payments**

* Stripe

**Deployment**

* Vercel

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/sixtwogo.git
cd sixtwogo
```

Install dependencies:

```bash
npm install
npm install @supabase/ssr, @supabase/supabase-js, next, next-intl, react, react-dom, stripe
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

## 🚀 Running the App

Start the development server:

```bash
npm run dev
```

Open in your browser:

```
http://localhost:3000
```

---

## 💳 Stripe Setup

1. Create a Stripe account
2. Add your API keys to `.env.local`
3. Set up webhooks (recommended for production)
4. Handle payment events in your backend (API routes)

---

## 🧠 Supabase Setup
-- screenshots in the word doc show how the tables are supposed to look!
1. Create a project on Supabase
2. Set up your database tables
3. Enable authentication (if used)
4. Add your project keys to `.env.local`

---

## 🚀 Deployment

The easiest way to deploy:

1. Push your code to GitHub
2. Import the repo into Vercel
3. Add your environment variables
4. Deploy 🎉

---

## 📌 Notes

* Make sure environment variables are correctly set
* Never expose secret keys in the frontend
* Use Stripe webhooks for reliable payment handling

---

## 👨‍💻 Author

Built by jay62 😎
Feel free to fork, improve, and customize!
msg me on discord: jayk62

---
