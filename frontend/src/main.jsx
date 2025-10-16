import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import UserProvider from './pages/authentication/UserContext.js';

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
);