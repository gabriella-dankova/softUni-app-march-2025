import { Route, Routes } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
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
<Home />

      {/* <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/catalog/:productId" element={<ProductDetails />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes> */}

      
    </div>
  )
}

export default App
