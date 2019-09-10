import React from 'react';
import './confirmacion-de-pedido.scss';
import Select from "react-select";

const puntosDeRetiro = [
    { value: '1', label: 'Calle 6 5047 - Berazategui' },
    { value: '2', label: 'Calle 13 4826 - Berazategui'},
    { value: '3', label: 'Perdriel 74 - CABA' },
];

export default class ConfirmacionDePedido extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombreClienteDelPedido: '',
            emailClientePedido: '',
            telefonoClientePedido: '',
            puntoDeRetiro: ''
        }
    }

    calcularTotal = () => {
        return this.props.pedido.precio * this.props.pedido.cantidadPedido
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
                            {this.props.pedido.nombreProducto}
                        </p>

                    </header>
                    <div className="card-content">
                        <div className="content">

                            <div className="field-row">
                                <div className="field ">
                                    <p className="subtitle">Nombre</p>

                                    <input
                                        className="input field nombre-cliente"
                                        type="text"
                                        value={this.state.nombreClienteDelPedido}
                                        onChange={(event) => this.setState({nombreClienteDelPedido: event.target.value})}/>
                                </div>

                                <div className="field">
                                    <p className="subtitle">Punto de retiro</p>

                                    <Select
                                        placeholder={''}
                                        className="field nombre-cliente"
                                        value={this.state.puntoDeRetiro}
                                        onChange={(tipo) => this.setState({puntoDeRetiro: tipo})}
                                        options={puntosDeRetiro}
                                    />
                                </div>
                            </div>

                            <div className="field-row">
                                <div className="field">
                                    <p className="subtitle">Email</p>

                                    <input
                                        className="input field nombre-cliente"
                                        type="text"
                                        value={this.state.emailClientePedido}
                                        onChange={(event) => this.setState({emailClientePedido: event.target.value})}/>
                                </div>

                                <div className="field">
                                    <p className="subtitle retiro-text">¡Elegí el punto de entrega que quieras! Te avisamos cuando tu pedido esté listo para que lo pases a buscar</p>
                                </div>
                            </div>

                            <div className="field-row">
                                <div className="field">
                                    <p className="subtitle">Telefono</p>

                                    <input
                                        className="input field nombre-cliente"
                                        type="text"
                                        value={this.state.telefonoClientePedido}
                                        onChange={(event) => this.setState({telefonoClientePedido: event.target.value})}/>
                                </div>

                                <div className="field">
                                    <p className="subtitle is-5 producto-y-cantidad-text">{this.props.pedido.nombreProducto + " "+ this.props.pedido.pesoProducto + " gr x " + this.props.pedido.cantidadPedido + "u."}</p>
                                </div>
                            </div>

                            <div className="field-row total-row">
                                <p>Total: {"$" + this.calcularTotal()}</p>
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