import { Route, Routes } from "react-router-dom"
import SideBar from "./components/Layout"
import {  Dashboard, LoginPage, NotFound, SettingPage } from "./pages"
import SearchBookings from "./pages/(bookings)/SearchBookings"
import DemoTabs from "./pages/(tabs)"
import { useAuth } from "./providers/AuthenticationContext"

function App() {
  const { user } = useAuth()
  return (
    <>
      {user ?
        <SideBar>
          <Routes>
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/bookings/search" element={<SearchBookings />} />
              <Route path="/tabs" element={<DemoTabs />} />
              <Route path="*" element={<NotFound />} />
            </>
          </Routes>
        </SideBar>
        :
        <LoginPage />
      }
    </>
  )
}

export default App
