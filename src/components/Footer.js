// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333', 
      color: '#fff',          
      textAlign: 'center',
      padding: '10px 0',
      width: '100%',
      marginTop: 'auto', // Pousse le footer vers le bas dans un conteneur flex
    }}>
      <p>© 2024 Canine Vista. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
