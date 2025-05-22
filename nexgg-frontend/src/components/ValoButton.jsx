// components/ValoButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ValoButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/valorant');
  };

  return (
    <button onClick={handleClick} className="ml-2 hover:scale-105 transition-transform">
      <img src="./public/Valorant-logo.svg" alt="Valorant" className="h-5" />
   
    </button>
  );
};

export default ValoButton;
