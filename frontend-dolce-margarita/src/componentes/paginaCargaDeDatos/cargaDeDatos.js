import React from 'react';

import './cargaDeDatos.scss';

export default class CargaDeDatos extends React.Component {
    render() {
        return (
            <div class="home-carga-de-datos ">

                <div>
                    <p class="title is-1 is-spaced">Carga de datos</p>
                </div>


                <div className="field">

                    <p className="subtitle is-4 is-spaced">formato del producto</p>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select>
                                <option>Figura</option>
                                <option>Bomboneria</option>
                                <option>Huevo</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">nombre</p>
                        <div className="control">
                            <input className="input is-danger" type="text"/>
                        </div>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">precio</p>
                        <div className="control">
                            <input className="input" type="text"/>
                        </div>
                </div>

                <div className="field">
                    <p className="subtitle is-4 is-spaced">descripción</p>
                    <div className="control">
                        <input className="textarea" type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}