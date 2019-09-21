import React from 'react';

import './loginAdmin.scss';

export default class LoginAdmin extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-title-container">
                    <p className="title">Logeate como administrador</p>
                </div>

                <div className="fields-container">
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary" type="text" placeholder="Usuario administrador"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input is-primary" type="text" placeholder="Contraseña"/>
                        </div>
                    </div>

                    <a className="button is-danger datos">
                        Ingresar
                    </a>
                </div>
            </div>
        )
    }
}