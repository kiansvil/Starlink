import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import DashboardPage from './pages/DashboardPage'
import './App.css'

// کامپوننت ProtectedRoute برای محافظت از routeها
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to="/login" />
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Routeهای عمومی */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Routeهای محافظت شده */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Route پیش‌فرض */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {/* برای routeهای نامعلوم */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App