import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/Resetpassword'
import './App.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const renderForm = () => {
    switch(currentForm) {
      case 'login':
        return <Login onFormSwitch={setCurrentForm} />
      case 'register':
        return <Register onFormSwitch={setCurrentForm} />
      case 'reset':
        return <ResetPassword onFormSwitch={setCurrentForm} />
      default:
        return <Login onFormSwitch={setCurrentForm} />
    }
  }

  return (
    <div className="app">
      {renderForm()}
    </div>
  )
}

export default App