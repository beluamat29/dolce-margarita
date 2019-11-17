import React from "react";
import {figuras, bombones, huevos} from '../../moldes'
import './navbar.scss'
import {faUser, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from "react-router-dom";

const Navbar = ({itemClick, adminLogeado, history, deslogearAdmin}) => {

  const logearOIrAIndexAdmin = () => {
      if(adminLogeado) {
          history.push('/adminindex')
      } else {
          history.push('/adminlogin')
      }
  }

  const deslogearAdminEIrAHome = () => {
      deslogearAdmin()
      history.push('/')
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={require('../../assets/margarita.png')} width="112" height="28"/>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="categoria" onClick={() => itemClick(figuras)}>
            Figuras
          </a>

          <a className="categoria" onClick={() => itemClick(bombones)}>
            Bombonería
          </a>

          <a className="categoria" onClick={() => itemClick(huevos)}>
            Huevos
          </a>
        </div>
        <div className='admin-icon' onClick={()=> logearOIrAIndexAdmin()}>
            <FontAwesomeIcon icon={faUser}/>
        </div>
          <div className='admin-icon' onClick={()=> deslogearAdminEIrAHome()}>
              {adminLogeado && <FontAwesomeIcon icon={faDoorOpen}/>}
          </div>
      </div>
    </nav>
  )
}

export default Navbar;