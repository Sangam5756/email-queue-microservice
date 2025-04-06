# 📧 Email Queue Microservice

This project is a simple service that helps you send emails in the background without slowing down your main app or website.

Imagine you're running a website where users sign up. When someone registers, you want to send them a welcome email. But sending that email immediately could slow down the page — especially if many users sign up at once.

**This microservice solves that problem.**

---

## 🛠️ What It Does (Simple Example)

1. A user signs up on your website.
2. Instead of sending the email right away, your site sends a **request** to this microservice saying: "Hey, send this email."
3. The microservice puts that email into a **queue** (like a waiting list).
4. A background worker picks up the email job and sends it without blocking your main app.
5. You move on. Fast and smooth for your users. ✅

---

## 🌟 Features

- ✅ **Send emails in the background** without waiting.
- ✅ Automatically **retry sending** if it fails (up to 5 times).
- ✅ Removes email jobs from memory after they're done or failed (to save space).
- ✅ Dockerized: Works anywhere with a single command.
- ✅ Based on **Redis Queue** and **Nodemailer** (popular and reliable tools).
- ✅ Simple **REST API** to send emails.
- ✅ Add your own **email address and password** easily using `.env`.

---

## 💻 How to Use It

Send a request like this:

```http
POST /send
Content-Type: application/json

{
  "to": "user@example.com",
  "subject": "Welcome to our site!",
  "text": "Thanks for joining us.",
  "html": "<h1>Hello 👋</h1><p>We’re glad you’re here!</p>"
}
```

That’s it! The microservice will handle the rest.

---

## 🔧 Real-World Example

You're building an e-commerce site:

- A user places an order ✅  
- Your main app sends a request to this microservice to send an **order confirmation email**  
- The email gets queued and sent by a background worker  
- Your user gets their email, and your site stays fast!

---

## 📦 Tech Under the Hood (Just in Case)

- **Node.js** – the backend engine
- **BullMQ** – to manage the job queue
- **Redis** – stores job data temporarily
- **Nodemailer** – sends the actual emails
- **Docker + Supervisor** – makes it easy to run everything together (email worker + Redis)

---

## 🤖 Who Is This For?

- Developers building apps that send lots of emails
- People who want to keep their app fast while still sending important notifications
- 
---

## 🧠 Why It Matters

Instead of worrying about delays or failed emails messing up your site, this service lets you:
- Focus on your core app
- Trust that emails are handled separately and reliably
- Improve your app’s **performance**, **scalability**, and **user experience**



Made with ❤️ by [@Sangam5756](https://github.com/Sangam5756)
