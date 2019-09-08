import React from "react";
import './modalArmadoDePedido.scss'

export default class ModalArmadoDePedido extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title title">Arma tu pedido!</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}></button>
                    </header>
                    <section className="modal-card-body">
                        <p className="titulo-producto">{this.props.nombreProducto + " de " + this.props.pesoProducto + " grs"} </p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Continuar</button>
                        <button className="button is-danger" onClick={this.props.onClose}>Cancelar</button>
                    </footer>
                </div>
            </div>

        )
    }
}