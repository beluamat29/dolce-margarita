import React from 'react';
import {moldes} from "../../constantes";
import './homepage.scss';

import {withRouter} from "react-router-dom";

class Home extends React.Component {

    irAPaginaDeListados = (molde) => {
        this.props.seleccionarMolde(molde)
        this.props.history.push("/listado")
    }

    irALoginAdmin = () => {
        this.props.history.push("/adminLogin")

    }

    renderCarta = (titulo, molde) => {
        return (
            <div className='molde' key={molde} onClick={() => this.irAPaginaDeListados(molde)}>
                <p></p>
            </div>
        )
    }
    // moldes.map((molde) => this.renderCarta(molde.tituloCarta, molde.nombreCategoria))

    render() {
        return (
            <div className="home-usuario">
                <div className='molde fondo-figuras'>
                    <h2>Figuras</h2>
                </div>
                <div className='molde fondo-bombones'>
                    <h2>Bombonería</h2>
                </div>
                <div  className='molde fondo-huevos'>
                    <h2>Huevos</h2>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);