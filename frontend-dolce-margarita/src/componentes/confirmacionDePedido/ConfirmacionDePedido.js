import React from 'react';
import './confirmacion-de-pedido.scss';


export default class ConfirmacionDePedido extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombreClienteDelPedido: '',
            emailClientePedido: ''
        }
    }

    render() {
        return (
            <div className="confirmacion-pedido">
                <div className="title">
                    <p className="title is-1 is-spaced">Confirmación de pedido</p>
                </div>

                <div className="card pedido">
                    <header className="card-header">
                        <p className="card-header-title">
                            Component
                        </p>

                    </header>
                    <div className="card-content">
                        <div className="content">
                            <div>
                                <p>Cantidad: 5</p>
                            </div>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <button className="button is-success" onClick={this.continuar}>Continuar</button>
                        <button className="button is-danger" onClick={this.props.onClose}>Cancelar</button>
                    </footer>
                </div>
            </div>
        )
    }
}