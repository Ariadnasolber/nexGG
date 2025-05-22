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
import UserProfile from './pages/Profile';
import Dashboard from './pages/Dashboard';

// Páginas de juegos
import LeagueOfLegends from './pages/LeagueOfLegends';
import ValorantComingSoon from './pages/ValorantComingSoon';
import ApexLegends from './pages/ApexLegends';
import Overwatch from './pages/Overwatch';
import CounterStrike from './pages/CounterStrike';
import MarvelRivals from './pages/MarvelRivals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas generales */}
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/campeones" element={<Champions />} />
        <Route path="/tierlist" element={<Tierlist />} />
        <Route path="/overlay" element={<Builds />} />
        <Route path="/champprofile" element={<ChampProfile />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* Rutas individuales de juegos */}
        <Route path="/lol" element={<LeagueOfLegends />} />
        <Route path="/valorant" element={<ValorantComingSoon />} />
        <Route path="/apex" element={<ApexLegends />} />
        <Route path="/overwatch" element={<Overwatch />} />
        <Route path="/cs" element={<CounterStrike />} />
        <Route path="/marvel" element={<MarvelRivals />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
