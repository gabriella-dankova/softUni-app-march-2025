import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    </AuthProvider>
  
    
  )
