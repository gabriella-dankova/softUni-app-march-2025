import { Route, Routes } from 'react-router'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Pricing from './components/Pricing'



function App() {
  
    return (
    <div className="bg-white">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalog' element={<h1>Catalog</h1>}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/pricing' element={<Pricing />}/>
      </Routes>

      
    </div>
  )
}

export default App
