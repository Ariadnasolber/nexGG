import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Champions from './pages/Champions';
import Tierlist from './pages/Tierlist';
import Builds from './pages/Builds';
import ChampProfile from './pages/ChampProfile';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Header />} />
        {/* Auth y user */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* Champions list y profile */}
        <Route path="/champions" element={<Champions />} />
        <Route path="/champprofile" element={<ChampProfile />} />

        {/* Otras secciones */}
        <Route path="/tierlist" element={<Tierlist />} />
        <Route path="/overlay" element={<Builds />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
