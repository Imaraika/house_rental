import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CompanyDetailsComponent from './components/CompanyDetails';
import SignupLnL from './components/SignupLnL';
import LoginLnL from './components/LoginLnL';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import TenantDashboard from './components/TenantDashboard';
import Landlord from './components/Landlord';
import Home from './components/Home';
import HouseList from './components/HouseList';
import HouseDetails from './components/HouseDetails';
import PaymentPage from './components/PaymentPage';
import FinalConfirmation from './components/FinalConfirmation';
import SearchBox from './components/SearchBox';
import WelcomeForm from './components/WelcomeForm'; // Import the WelcomeForm component
import ContactForm from './components/ContactForm';
import PrivateRoute from './components/PrivateRoute';


const Commissionaires = () => <div>Commissionaires</div>;
const Updates = () => <div>Updates</div>;

const AppContent = () => {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited && location.pathname === '/') {
      setShowWelcome(true);
      localStorage.setItem('hasVisited', 'true');
    } else {
      setShowWelcome(false);
    }
  }, [location.pathname]);

  return (
    <div>
      {showWelcome && location.pathname === '/' ? (
        <div className="welcome-page">
          <video autoPlay loop muted className="background-video">
            <source src="/video/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <WelcomeForm />
        </div>
      ) : (
        <>
          <Header />
          <Navbar />
          <div className="container">
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company-details" element={<CompanyDetailsComponent />} />
                <Route path='/contact' element={<ContactForm />} />
                <Route path="/signupLnL" element={<SignupLnL />} />
                <Route path="/loginLnL" element={<LoginLnL />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/tenant-dashboard" element={
                  <PrivateRoute>
                  <TenantDashboard />
                </PrivateRoute>} />
                <Route path="/landlord" element={<Landlord />} />
                <Route path="/tenant" element={<HouseList />} />
                <Route path="/commissionaires" element={<Commissionaires />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/house/:id" element={<HouseDetails />} />
                <Route path="/payment/:id" element={<PaymentPage />} />
                <Route path="/final/:id" element={<FinalConfirmation />} />
                <Route path="/search" element={<SearchBox />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
