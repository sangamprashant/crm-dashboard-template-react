import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar"
import { AddBookingPage, AnalyticsPage, BookingSearch, Dashboard, LeadsPage, LoginPage, MailsPage, NotFound, SettingPage } from "./pages"
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
              <Route path="/mails" element={<MailsPage />} />
              <Route path="/leads" element={<LeadsPage />} />
              <Route path="/bookings/search" element={<BookingSearch />} />
              <Route path="/bookings/create" element={<AddBookingPage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
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
