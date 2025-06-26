<p align="center">
  <h1 align="center">PORTFOLIO</h1>
  <em>Empowering Connections, Inspiring Opportunities, Unleashing Potential</em>
</p>

<p align="center">
  <a href="https://www.linkedin.com">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" />
  </a>
  <a href="https://twitter.com">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white" />
  </a>
</p>

---

### 🛠️ Built with the tools and technologies

![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens)
![Nodemailer](https://img.shields.io/badge/Nodemailer-BA0C2F?style=flat)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

## 📌 Overview

Portfolio is a developer-focused tool designed to streamline the deployment of a personal portfolio website with integrated contact functionality. It provides a robust server setup that manages incoming requests, handles contact form submissions securely, and dispatches email notifications seamlessly.

### Why portfolio?

This project simplifies building and deploying a professional portfolio site with backend support. The core features include:

- ✅ **Middleware Integration:** Incorporates essential middleware like CORS, environment variable management, and email notifications to ensure a secure and flexible server environment.
- 🔐 **Secure Contact Handling:** Facilitates secure processing of contact form submissions, validating user input and dispatching emails reliably.
- 🌐 **Web Server Deployment:** Provides an easy-to-configure web server that serves your portfolio content and manages user interactions.
- 🎨 **Frontend Structure:** Includes a well-organized HTML structure with dedicated pages for showcasing skills, projects, and contact information.
- 📬 **Seamless Communication:** Connects frontend contact forms with backend email dispatch, enhancing user engagement and communication.

---

## 🚀 Getting Started

### 🧰 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14+)
- npm (comes with Node)
- [Git](https://git-scm.com/)
- A modern browser (Chrome, Firefox, etc.)

---

### 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/meliscula/portfolio.git
cd portfolio
```

2. **Install backend dependencies:**

```bash
cd server
npm install
```

3. **Install frontend dependencies:**

```bash
cd ../client
npm install
```

4. **Environment variables:**

Create a `.env` file in the `server` folder with:

```env
PORT=5000
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
RECEIVER_EMAIL=your-receiving-email@example.com
```

---

### ⚙️ Usage

Start both servers in separate terminals:

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd client
npm start
```

Visit: `http://localhost:3000`

---

### 🧪 Testing

- Fill out the contact form and submit it.
- Check the backend logs for confirmation.
- Optionally, test using [Postman](https://www.postman.com/) or write Cypress tests.

---

> ⚠️ Never expose real `.env` values in public repos.

---