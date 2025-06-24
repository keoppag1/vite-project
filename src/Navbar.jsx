import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-advanced">
      <div className="navbar-logo">
        <span className="logo-icon">🌐</span> FronX
      </div>
      <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menú">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links navbar-links-advanced${open ? ' open' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/hentai">Hentai</Link></li>
        <li><Link to="/categoria/casero">Casero</Link></li>
        <li><Link to="/categoria/rosadita">Rosadita</Link></li>
        <li><Link to="/categoria/otros">Otros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 