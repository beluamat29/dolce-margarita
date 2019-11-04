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
            <div className="card" key={molde} onClick={() => this.irAPaginaDeListados(molde)}>
                <div className={"card-content " + molde}/>
                <div className="card-footer">
                    <p className="subtitle">{titulo}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="home-usuario">
                <div className="title">
                    <p className="title is-1 is-spaced">¿Qué vas a llevar hoy?</p>
                </div>

                <div className="cartas">
                    {
                        moldes.map((molde) => this.renderCarta(molde.tituloCarta, molde.nombreCategoria))
                    }
                </div>

                <button className="logeo-admin button is-danger datos" onClick={()=>this.irALoginAdmin()}>
                    Logearme como Admin
                </button>
            </div>
        )
    }
}

export default withRouter(Home);