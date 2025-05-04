import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h1>To-Do List</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>
          {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
