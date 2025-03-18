import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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

// Redirect handler component
const RedirectRoot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  return null;
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Load user from local storage on app start
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<RedirectRoot />} /> 
        <Route path="/welcome" element={<Welcome />} />
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
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
