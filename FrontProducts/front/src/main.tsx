import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import { LoginProvider } from './contexts/loginContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginProvider>
     <RouterProvider router={router} />
    </LoginProvider>
  </StrictMode>,
)
