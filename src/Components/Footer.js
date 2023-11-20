import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      marginTop: 'auto',
      textAlign: 'center',
      backgroundColor: '#f0f0f0', 
      padding: '10px',
    }}>
      <div>
        <h2>Follow Us on Social Media</h2>
        <ul>
          <li>Facebook: <a href="https://www.facebook.com/">Contact us on Facebook</a></li>
          <li>Twitter: <a href="https://twitter.com/">Contact us on Twitter</a></li>
        </ul>
      </div>

      <p>This website is owned by Orange</p>
    </footer>
  );
};

export default Footer;
