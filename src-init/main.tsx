import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SidebarProvider } from './providers/SidebarContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthenticationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
)
