// doc REACT LIBRARY IMPORT
import React from 'react';

// doc FOOTER FUNCTION COMPONENT
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333', // doc FOOTER BACKGROUND COLOR
      color: '#fff',           // doc FOOTER TEXT COLOR
      textAlign: 'center',     // doc CENTER TEXT ALIGNMENT
      padding: '10px 0',       // doc TOP AND BOTTOM PADDING
      width: '100%',           // doc FULL WIDTH FOOTER
      marginTop: 'auto',       // doc PUSH FOOTER TO BOTTOM IN FLEX CONTAINER
    }}>
      <p>© 2024 Canine Vista. All rights reserved.</p> {/* doc COPYRIGHT TEXT */}
    </footer>
  );
};

// doc EXPORT FOOTER COMPONENT
export default Footer;
