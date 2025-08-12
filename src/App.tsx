import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import { AnalyticsPage, Dashboard, LoginPage, NotFound, SettingPage } from "./pages"
import { useAuth } from "./providers/AuthenticationContext"
import CompletedBookings from "./pages/(bookings)/CompletedBookings"
import Bookings from "./pages/(bookings)"
import SearchBookings from "./pages/(bookings)/SearchBookings"
import PaymentReceived from "./pages/(bookings)/PaymentReceived"
import CreateBooking from "./pages/(bookings)/CreateBooking"

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
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/bookings/search" element={<SearchBookings />} />
              <Route path="/bookings/create" element={<CreateBooking />} />
              <Route path="/bookings/payment" element={<PaymentReceived />} />
              <Route path="/bookings/completed" element={<CompletedBookings />} />
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
