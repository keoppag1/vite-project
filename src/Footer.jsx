import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} FronX. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer; 