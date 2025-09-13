import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalProvider } from './pages/authentication/globalContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
)
