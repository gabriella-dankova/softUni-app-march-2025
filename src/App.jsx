import { Route, Routes } from 'react-router'

import Header from './components/Header'
import FirstStartingPage from './components/FirstStartingPage'
import SecondStartingPage from './components/SecondStartingPage'
import ThirdStartingPage from './components/ThirdStartingPage'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LogInForm'
import HomePage from './components/HomePage'
import Contacts from './components/Contacts'
import Pricing from './components/Pricing'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'
import ProductDetails from './components/ProductDetails'
import './App.css'



function App() {
  
    return (
      <div 
  className="min-h-screen text-white" 
  style={{ backgroundColor: "var(--color-lime-100)" }}
>

      <Routes>
        <Route path="/" element={<FirstStartingPage />} />
        <Route path="/second" element={<SecondStartingPage />} />
        <Route path="/third" element={<ThirdStartingPage />} />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route path="/logInForm" element={<LoginForm />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    

      
    </div>
  )
}

export default App
