import React from "react";
import {figuras, bombones, huevos} from '../../moldes'
import './navbar.scss'

const Navbar = ({itemClick}) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={require('../../assets/margarita.png')} width="112" height="28"/>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => itemClick(figuras)}>
            Figuras
          </a>

          <a className="navbar-item" onClick={() => itemClick(bombones)}>
            Bombonería
          </a>

          <a className="navbar-item" onClick={() => itemClick(huevos)}>
            Huevos
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;