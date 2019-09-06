import React from 'react';
import './cargaDeDatos.scss';

export function  RellenoDeParedesDeHuevoCheckbox(props) {
    if (props.admiteRelleno) {
        return <div>
                <input type="checkbox" className="checkbox-dulce-de-leche"/>
                    Paredes con Dulce de leche
                </div>
    }

    return <div></div>
}