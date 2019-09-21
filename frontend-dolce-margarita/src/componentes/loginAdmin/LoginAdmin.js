import React from 'react';

import './loginAdmin.scss';
import servicio from "../../servicios/ServicioLogin";

export default class LoginAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombreUsuario: '',
            contrasenia: ''
        }
    }

    validarDatos= () => {
        servicio.logearAdmin(this.state.nombreUsuario, this.state.contrasenia)
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-title-container">
                    <p className="title">Logeate como administrador</p>
                </div>

                <div className="fields-container">
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary"
                                   type="text"
                                   placeholder="Usuario administrador"
                                   value={this.state.nombreUsuario}
                                   onChange={(event) => this.setState({nombreUsuario: event.target.value})}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary"
                                   type="text"
                                   placeholder="Contraseña"
                                   value={this.state.contrasenia}
                                   onChange={(event) => this.setState({contrasenia: event.target.value})}
                            />
                        </div>
                    </div>

                    <a className="button is-danger datos" onClick={this.validarDatos}>
                        Ingresar
                    </a>
                </div>
            </div>
        )
    }
}