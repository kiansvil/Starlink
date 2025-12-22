import { useState } from 'react'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/Resetpassword'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        // ✅ تغییر اصلی: تابع ناوبری (setCurrentPage('login')) را به HomePage پاس می‌دهیم.
        return <HomePage onNavigateToLogin={() => setCurrentPage('login')} /> 
      case 'login':
        return <Login onFormSwitch={setCurrentPage} />
      case 'register':
        return <Register onFormSwitch={setCurrentPage} />
      case 'reset':
        return <ResetPassword onFormSwitch={setCurrentPage} />
      default:
        return <HomePage onNavigateToLogin={() => setCurrentPage('login')} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App