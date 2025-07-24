import './NavBar.css';

import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import moonIcon from '../assets/icons/moon.svg?react';


interface NavBarProps {
  pages: string[];
}

/**
 * NavBar component for the application.
 * This component renders the navigation bar with
 * links to different sections of the app.
 *
 * @returns JSX Element representing the NavBar
 */
function NavBar({ pages }: NavBarProps) {

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
      <div className='title-container'>
        {/* Theme Toggle Button */}
        <button className='theme-toggle' onClick={handleThemeToggle}>
          {isDarkMode ? <SunIcon className="theme-icon" title="Switch to light mode" /> : <MoonIcon className="theme-icon" title="Switch to dark mode" />}
        </button>

        {/* No navbar-title, Home is now a navbar-link below */}
        <button className='menu-icon' onClick={() => setIsOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`${isMenuOpen ? 'open' : ''}`}>
        <li key="home">
          <NavLink to="/" className='navbar-links' onClick={() => {
            setIsOpen(false)
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}>
            Home
          </NavLink>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <NavLink to={`/${page.toLowerCase()}`} className='navbar-links' onClick={() => {
              setIsOpen(false)
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}>
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;