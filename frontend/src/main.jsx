import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import UserAuthProvider from './pages/authentication/LoginInfo.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </StrictMode>,
)
