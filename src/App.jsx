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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/campeones" element={<Champions />} />
          <Route path="/tierlist" element={<Tierlist />} />
          <Route path="/overlay" element={<Builds />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;