import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Champions from './pages/Champions';
import Tierlist from './pages/Tierlist';
import Builds from './pages/Builds';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChampProfile from './pages/ChampProfile';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';

// 
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<UserProfile />} />

          <Route path="/campeones" element={<Champions />} />
          <Route path="/tierlist" element={<Tierlist />} />
          <Route path="/overlay" element={<Builds />} />
          <Route path="/champprofile" element={<ChampProfile />} />
          <Route path="/profile" element={<UserProfile />} /> {/* Nueva ruta para el perfil de usuario */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;