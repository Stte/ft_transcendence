import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <button className="nav-btn">1 vs 1</button>
      <button className="nav-btn">Tournaments</button>
      <button className="nav-btn">Friends</button>
    </nav>
  );
};

export default NavBar;
