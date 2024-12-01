import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './typography.css'
import './all.css'
// import "react-quill/dist/quill.snow.css";
// import './index.css'
import App from './App.tsx'
import { UserContextProvider } from './context/auth_context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>,
)
