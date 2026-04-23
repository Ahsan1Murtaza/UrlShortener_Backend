# 🔗 URL Shortener Backend System

A backend system built with Node.js and Express that allows users to create shortened URLs with authentication, user-based URL management, and usage limits for free-tier accounts.

This project follows a modular architecture using controllers, services, routes, and middleware to simulate real-world backend design.

---

## 🚀 Features

### 🔐 Authentication System
- User registration and login
- Token-based authentication
- Protected routes for URL creation

### 🔗 URL Shortening System
- Generate short URLs using crypto-based unique codes
- Redirect short URLs to original links
- Store and retrieve user-specific URLs

### 👤 User-Based System
- Each user has their own URL records
- Users can view all their created short URLs
- Logout and session handling

### 💳 Plan / Limit System
- Free plan allows up to **10 URLs per user**
- URL creation restricted after limit is reached

### 🧱 Backend Architecture
- MVC-style structure (Controllers, Models, Routes)
- Service layer for business logic
- Middleware for authentication
- Utility functions for reusable logic

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Ejs (for UI)
- JWT / Token-based authentication
- Crypto module (for short code generation)
