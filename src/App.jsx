import { Route, Routes } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Pricing from './components/Pricing'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'
import './App.css'



function App() {
  
    return (
    <div className="bg-white">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>

      
    </div>
  )
}

export default App
