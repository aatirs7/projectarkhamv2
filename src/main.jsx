import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles.css'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import FajrProtocol from './pages/FajrProtocol.jsx'
import { AuthProvider, useAuth } from './state/auth.js'

function Protected({ children }) {
  const { authed } = useAuth()
  return authed ? children : <Navigate to="/login" replace />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/protocol" element={<Protected><FajrProtocol /></Protected>} />
          <Route path="/" element={<Protected><Dashboard /></Protected>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
