import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Register from './pages/register';
import Home from './pages/Homepage';
import AboutUs from './pages/aboutus';
import Profile from './pages/profile';  // Import the Profile component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from "./pages/dashboard";
import Faq from './pages/faq';
import Terms from './pages/terms';
import Privacy from './pages/privacy';

function App() {
  // Define an array of routes that should have the header and footer
  const routesWithHeaderAndFooter = [
    '/register',
    '/',
    '/aboutus',
    '/profile',  // Add '/profile' to the list of routes
  ];

  // Helper function to check if a route should have the header and footer
  const shouldShowHeaderAndFooter = (pathname) => {
    return routesWithHeaderAndFooter.includes(pathname);
  };

  // Define a sample user object
  const user = {
    name: 'John Doe',
    // Add other user properties like email, etc.
  };

  return (
    <Router>
      <div className="App">
        {/* Conditionally render the Header component based on the route */}
        {shouldShowHeaderAndFooter(window.location.pathname) && <Header />}
        
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/profile" element={<Profile user={user} />} /> {/* Pass the user object to the Profile component */}
          </Routes>
        </main>

        {/* Conditionally render the Footer component based on the route */}
        {shouldShowHeaderAndFooter(window.location.pathname) && <Footer />}
      </div>
    </Router>
  );
}

export default App;
