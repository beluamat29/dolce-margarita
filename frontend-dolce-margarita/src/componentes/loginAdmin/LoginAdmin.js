import React from 'react';
import servicioLogin from "../../servicios/servicioLogin"
import './loginAdmin.scss';
import {withRouter} from "react-router-dom";

export default class LoginAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            contraseña: ''
        }
    }

    validarDatos= () => {
        servicioLogin.validarAdmin(this.state.email, this.state.contraseña)
            .then(response => this.props.history.push("/adminindex"))
            .catch(e => alert("tu usuario o contraseña son incorrectos"))
    }

    render() {
        return (
            <div className="home-page-login">
                <div className="home-title-container">
                    <p className="title">Logeate como administrador</p>
                </div>

                <div className="fields-container">
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary"
                                   type="text"
                                   placeholder="Usuario administrador"
                                   value={this.state.email}
                                   onChange={(event) => this.setState({email: event.target.value})}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary"
                                   type="password"
                                   placeholder="Contraseña"
                                   value={this.state.contraseña}
                                   onChange={(event) => this.setState({contraseña: event.target.value})}
                            />
                        </div>
                    </div>

                    <button className="button is-danger datos" onClick={()=>this.validarDatos()}>
                        Ingresar
                    </button>
                </div>
            </div>
        )
    }
}
