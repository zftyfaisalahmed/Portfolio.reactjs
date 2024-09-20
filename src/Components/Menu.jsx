import React, { useState } from 'react'

const Menu = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Optionally, you can also toggle a class on the body for dark mode styles
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <a href='#home' className="logo">
          Portfolio.
      </a>
      <nav className={`navbar1 ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Project</a>
          <a href="#contact">Contact</a>
      </nav>
      
      <div className={isDarkMode ? "bi bi-sun" : "bi bi-moon"} onClick={toggleDarkMode} id="darkMode-icon"></div>

      <div className="bi bi-list" onClick={toggleMenu} id="menu-icon"></div>
    </header>
  )
}

export default Menu