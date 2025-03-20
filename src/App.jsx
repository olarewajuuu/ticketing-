import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventsPage from "./pages/EventsPage";
import SupportPage from "./pages/SupportPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import FpPopup from "./hooks/FpPopu";
import AsPopup from "./hooks/AsPopup";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import EventDetail from "./pages/EventDetail";
import TicketCard from "./components/tickect/TicketCard";
import TicketSummary from "./components/tickect/TicketSummary";
import DisplayTicket from "./components/tickect/DisplayTicket";
import Payment from "./components/tickect/Payment";
import Success from "./components/tickect/Success";

// Import dashboard components
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/DashboardHome";
import MyEvents from "./components/dashboard/MyEvents";
import Payments from "./components/dashboard/Payments";
import EditProfile from "./components/dashboard/EditProfile";
import Profile from "./components/dashboard/Profile";
import ChangePassword from "./components/dashboard/ChangePassword";
import SignOut from "./components/dashboard/SignOut";
import Notification from "./components/dashboard/Notification";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signin" element={<SignIn setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/fp-popup" element={<FpPopup />} />
        <Route path="/account-success" element={<AsPopup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/ticket-card/:id" element={<TicketCard />} />
        <Route path="/ticket-summary/:id" element={<TicketSummary />} />
        <Route path="/display-ticket" element={<DisplayTicket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-events" element={<MyEvents />} />
          <Route path="payments" element={<Payments />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="signout" element={<SignOut setCurrentUser={setCurrentUser} />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
