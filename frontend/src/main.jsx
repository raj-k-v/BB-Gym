import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import CursorGlow from "./components/CursorGlow";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorGlow/>
    <RouterProvider router={router} />
  </StrictMode>,
)
