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

                    <p className="subtitle is-3 is-spaced">Producto</p>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Figura</option>
                                <option>Bomboneria</option>
                                <option>Huevo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}