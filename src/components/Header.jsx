/* eslint-disable react/prop-types */

import "./Header.css";

function Header({ isDark, toggleTheme }) {
  return (
    <header>
      <nav className='container'>
        <h1 className='title'>Where in the world?</h1>
        <a href='#' className='btn' onClick={toggleTheme}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </a>
        {isDark}
      </nav>
    </header>
  );
}

export default Header;
