// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.linkContainer}>
        <a href="/contact" style={styles.link}>Contact us</a>
        <a href="/terms" style={styles.link}>Terms & Conditions</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    textAlign: 'center',
    marginTop: 'auto',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#070e00ea',
  }
};

export default Footer;