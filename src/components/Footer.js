// doc REACT LIBRARY IMPORT
import React from 'react';

// doc FOOTER FUNCTION COMPONENT
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333', 
      color: '#fff',           
      textAlign: 'center',     
      padding: '10px 0',       
      width: '100%',           
      marginTop: 'auto',       // doc PUSH FOOTER TO BOTTOM IN FLEX CONTAINER
    }}>
      <p>© 2024 Canine Vista. All rights reserved.</p> {/* doc COPYRIGHT TEXT */}
    </footer>
  );
};

// doc EXPORT FOOTER COMPONENT
export default Footer;
