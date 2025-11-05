# 👗 SocialSell — Clothing Resale App

## 🧾 Overview

**SocialSell** is a modern web application for buying and reselling clothes online.  
It allows users to create, browse, like, and comment on clothing listings in a social and interactive way.  
The project demonstrates skills in **React**, **Firebase**, and **responsive UI design**, following clean and reusable component architecture.

This project was developed as part of my **SoftUni React course** to strengthen my front-end development skills and gain hands-on experience with real-world app architecture.

---

## ✨ Features

- **User Authentication** – secure login, registration, and logout using Firebase Authentication.  
- **Create Listings** – users can add clothing items with image, description, price, size, and quantity.  
- **Like & Comment** – users can like listings and post or delete comments.  
- **Filtering** – filter products by minimum and maximum price.  
- **Error Handling** – validation and user-friendly error messages for invalid inputs or network issues.  
- **Pre-login Pages** – three introductory pages accessible before authentication to explore the app.

---

## 🧩 Technologies Used

- ⚛️ **React** – built reusable components using hooks such as `useState` and `useEffect`.  
- 🧭 **React Router** – implemented client-side navigation between pages (catalog, details, login, etc.).  
- 🔥 **Firebase Authentication** – handled secure user registration, login, and logout.  
- 💾 **Firebase Firestore** – stored user data, listings, and comments in a NoSQL database.  
- 🖼️ **Firebase Storage** – enabled users to upload and display listing images.  
- 🎨 **Tailwind CSS** – used for responsive, modern, and consistent design.  
- ⚡ **Vite** – optimized development environment ensuring fast build and hot reload.  
- 💻 **JavaScript (ES6+)** – handled app logic, form validation, and state management.

---

## 🧱 Architecture & State Management

The app follows a **component-based architecture**, dividing features into independent and reusable UI parts.  
State management is handled with **React hooks**, primarily `useState` and `useEffect`, to manage form inputs, authentication states, and listing data.  
The data is fetched and updated dynamically from **Firebase Firestore**.

---

## 🚀 Future Improvements

- Add real-time updates for listings and comments.  
- Implement user profile pages with uploaded items and favorites.  
- Enable image preview before upload.  
- Introduce sorting by date, size, or category.  
- Add a dark/light mode switch for better user experience.

---

## 🧾 Installation and Setup

### Prerequisites
- Node.js and npm (or yarn)
- A Firebase project configured with Firestore, Authentication, and Storage

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/gabriella-dankova/softUni-app-march-2025.git

2. Navigate to the project folder:
   cd softUni-app-march-2025

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

The app will be available at http://localhost:5173

