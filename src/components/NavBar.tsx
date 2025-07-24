import './NavBar.css';

import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';


interface NavBarProps {
  title: string;
  pages: string[];
}

/**
 * NavBar component for the application.
 * This component renders the navigation bar with
 * links to different sections of the app.
 *
 * @returns JSX Element representing the NavBar
 */
function NavBar({ title, pages }: NavBarProps) {

  // MENU HANDLER //

  let [isMenuOpen, setIsOpen] = useState(false);
  /// Implementation for MENU here ///

  // END MENU HANDLER //

  // THEME HANDLER //

  const [isDarkMode, setIsDarkMode] = useState(
    // Use the local storage to check for dark mode preference
    localStorage.getItem('theme') != null ? localStorage.getItem('theme') === 'dark' :
      // else use the system preference
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Toggle theme and body class
  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.body.classList.remove('light');
    }
    else {
      document.body.classList.add('light');
    }
    // Store the theme preference in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  updateTheme(isDarkMode);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => {
      const newIsDark = !prev;
      updateTheme(newIsDark);
      return newIsDark;
    });
  };

  // END THEME HANDLER //

  return (
    <nav className={`navbar`}>

      {/* Navbar Title */}
      <div className='title-container'>

        {/* Theme Toggle Button */}
        <button className='theme-toggle' onClick={handleThemeToggle}>
          {isDarkMode ? '😎' : '😌'}
        </button>

        <Link to='/' className='navbar-title' onClick={() => setIsOpen(false)}>
          {title}
        </Link>

        {/* Menu Icon for Mobile View */}
        <button className='menu-icon' onClick={() => setIsOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

      </div>

      {/* Navigation Links */}
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        {pages.map((page, index) => (<li key={index}>
          <NavLink to={`${page.toLowerCase()}`} className='navbar-links' onClick={() => {
            setIsOpen(false)
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}>
            {page}
          </NavLink>
        </li>))}
      </ul>

    </nav >
  )
}

export default NavBar;