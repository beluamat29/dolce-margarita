import React from "react";
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={require('../../assets/margarita.png')} width="112" height="28"/>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Figuras
          </a>

          <a className="navbar-item">
            Bombonería
          </a>

          <a className="navbar-item">
            Huevos
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;