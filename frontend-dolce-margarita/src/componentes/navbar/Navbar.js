import React from "react";
import {figuras, bombones, huevos} from '../../moldes'
import './navbar.scss'
import {faUser, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from "react-router-dom";

const Navbar = ({seleccionarMolde, adminLogeado, history, deslogearAdmin}) => {

  const irAListado = (molde) => {
    seleccionarMolde(molde, () => history.push('/productos'))
  }

  const logearOIrAIndexAdmin = () => {
      if(adminLogeado) {
          history.push('/admin-index')
      } else {
          history.push('/admin-login')
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
          <a className="categoria" onClick={() => irAListado(figuras)}>
            Figuras
          </a>

          <a className="categoria" onClick={() => irAListado(bombones)}>
            Bombonería
          </a>

          <a className="categoria" onClick={() => irAListado(huevos)}>
            Huevos
          </a>
          {
            adminLogeado && (
              <div>
                <a className="categoria" onClick={() => history.push('/pedidos')}>
                  Pedidos
                </a>
                <a className="categoria" onClick={() => history.push('/productos-a-realizar')}>
                  A realizar
                </a>
                <a className="categoria" onClick={() => history.push('/carga-datos')}>
                  Cargar producto
                </a>
              </div>
            )
          }

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

export default withRouter(Navbar);
