# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# SocialSell - Clothing Resale App

## Overview

**SocialSell** is a web application designed for reselling clothes. The app allows users to create, browse, like, and filter listings of clothing items. Authentication is implemented using Firebase, and error handling is integrated to ensure smooth user experience. The application also includes pages before logging in, where users can explore the platform and get acquainted with the functionality.

## Features

- **Authentication**: Firebase authentication is used for user sign-in and sign-up.
- **Listing Items**: Users can create listings for clothes, including images, descriptions, price, size, and quantity.
- **Like Listings**: Users can like listings they are interested in.
- **Filter Listings**: Users can filter clothing listings by min and max price.
- **Error Handling**: The app includes error handling to manage invalid inputs and other common issues.
- **Pre-login Pages**: There are 3 pages before logging in that introduce the app and guide users through its features.
- **Adding comments**: Users can add and delete comments under the listings.

## Project Structure

### Pages

### Core Components

- **Authentication**:  
   - Firebase Authentication is implemented for secure sign-in and sign-up.
   - Account verification are handled by Firebase.
  
- **Listing Component**:  
   - Displays individual clothing listings with images, descriptions, price, size, and quantity.
   - Allows users to like their favorite listings.

- **Filter**:  
   - Users can filter by min and max price.

### Firebase Integration

- **Firebase Firestore**:  
   User data is stored in Firebase Firestore.
  
- **Firebase Authentication**:  
   Used for user authentication and managing sign-up, login, and sign-out processes.
  

### Error Handling

- **Authentication Errors**:  
   The app provides error messages when the user enters invalid credentials during sign-in or sign-up.
   
- **Network Errors**:  
   The app handles any issues that arise from Firebase or network connectivity by displaying appropriate error messages to the user.

## Architecture

The project follows a **component-based architecture** where each page and feature is broken down into smaller, reusable components.

### State Management

State management is handled using **React hooks** for managing form data, authentication states, and listings. The app uses **useState** and **useEffect** to handle local state and perform side effects like data fetching from Firebase.

## Installation and Setup

### Prerequisites

- Node.js and npm (or yarn) should be installed on your local machine.
- Firebase project set up in the Firebase Console.

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/gabriella-dankova/softUni-app-march-2025.git
