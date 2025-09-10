import React from 'react';

function Header() {
  return (
    <header>
      <div className="protfolio-container"><span>Port</span>folio.</div>
      <ul className="navlist">
        <li>
          <a href="#home"><span>Home</span></a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div id="menu-icon" className="bx bx-menu"></div>
    </header>
  );
}

export default Header;