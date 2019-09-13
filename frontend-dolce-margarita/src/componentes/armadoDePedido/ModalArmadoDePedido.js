import React from "react";
import './modalArmadoDePedido.scss';
import Select from 'react-select';
import DatosDeHuevoParaPedido from "./DatosDeHuevoParaPedido";

const tiposDeChocolate = [
    { value: 'semiamargo', label: 'Chocolate semi amargo' },
    { value: 'conLeche', label: 'Chocolate con leche' },
    { value: 'blanco', label: 'Chocolate blanco' },
];

const chocolateNulo = {
    //Se usa como valor default para cuando arranca el dropdown
    value: 'chocolatenulo', label: ''
}

const moldeSeleccionadoDesdeHome = 'huevo';

export default class ModalArmadoDePedido extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cantidadALlevar: 1,
            tipoDeChocolateALlevar: chocolateNulo,
            paredesRellenas: false
        }
    }

    esHuevo = () => {
        return this.props.esHuevo
    }

    continuar = () => {
        let pedido = {
            producto: this.props.producto,
            precio_total: this.props.producto * this.state.cantidadALlevar,
            cantidad: this.state.cantidadALlevar,
            tipo_chocolate: this.state.tipoDeChocolateALlevar,
        }

        this.props.onConfirm(pedido)
    }

    render() {
        const { producto } = this.props;

        return (
            <div className="modal is-active">
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title title">Arma tu pedido!</p>
                        <button className="delete" aria-label="close" onClick={this.props.onClose}/>
                    </header>

                    <section className="modal-card-body">
                        <p className="titulo-producto">{`${producto.nombre} de ${producto.peso}grs`} </p>
                        <div className="datos-pedido">
                            <p className="subtitle">¿Cuántos vas a llevar?</p>
                            <div className="input-cantidad">
                                <input
                                    min={1}
                                    className="input"
                                    type="number"
                                    value={this.state.cantidadALlevar}
                                    onChange={(event) => this.setState({cantidadALlevar: event.target.value})}/>
                            </div>

                            <p className="subtitle">¡Elegí el chocolate que más te guste!</p>
                            <div className="input-tipo-chocolate">
                                <Select
                                    value={this.state.tipoDeChocolateALlevar}
                                    onChange={(tipo) => this.setState({tipoDeChocolateALlevar: tipo})}
                                    options={tiposDeChocolate}
                                />
                            </div>

                            <div>
                                {
                                    this.esHuevo() && <DatosDeHuevoParaPedido
                                        moldeSeleccionado={moldeSeleccionadoDesdeHome}
                                        onChange={(paredes) => this.setState({paredesRellenas: paredes})}/>
                                }
                            </div>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={this.continuar}>Continuar</button>
                        <button className="button is-danger" onClick={this.props.onClose}>Cancelar</button>
                    </footer>
                </div>
            </div>

        )
    }
}