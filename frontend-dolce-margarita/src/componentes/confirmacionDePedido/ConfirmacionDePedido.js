import React from 'react';
import './confirmacion-de-pedido.scss';


export default class ConfirmacionDePedido extends React.Component {
    render() {
        return (
            <div className="confirmacion-pedido">
                <div className="title">
                    <p className="title is-1 is-spaced">Confirmación de pedido</p>
                </div>
                <div className="card pedido">
                    <header className="card-header">
                        <p className="title">Titulo del Pedido</p>
                    </header>
                </div>

            </div>
        )
    }
}