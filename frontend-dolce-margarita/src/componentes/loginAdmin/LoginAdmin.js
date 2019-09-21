import React from 'react';

import './loginAdmin.scss';

export default class LoginAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombreUsuario: '',
            contraseña: ''
        }
    }

    validarDatos= () => {
        //Aca deberiamos pegarle al backend
        if (this.state.nombreUsuario === 'Eli' && this.state.contraseña === '1234') {
            this.props.history.push("/cargaDatos")
        }
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
                                   value={this.state.contraseña}
                                   onChange={(event) => this.setState({contraseña: event.target.value})}
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