import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'

import AuthProvider from './Context/AuthContext/AuthProvider'
import router from './Router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
    <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
