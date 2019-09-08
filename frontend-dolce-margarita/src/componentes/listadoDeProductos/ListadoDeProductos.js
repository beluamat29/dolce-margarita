import './listadoDeProductos.scss';
import {productos} from "./listado-hasta-que-mica-levante-el-back";
import React from "react";
import ModalArmadoDePedido from "../armadoDePedido/ModalArmadoDePedido";


export default class ListadoDeProductos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrarModalDeCompra: false,
            nombreProductoSeleccionado: "",
            precioProductoSeleccionado: ""
        }
    }

    showModal = (producto) => {
        this.setState({ mostrarModalDeCompra: true,
            nombreProductoSeleccionado: producto.nombre,
            precioProductoSeleccionado: producto.precio,
            });
    };

    renderCarta = (producto) => {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-content">
                            <img src={require('./bombones.jpg')} />
                        </div>
                        <div className="flip-card-footer">
                            <p>{producto.nombre}</p>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="datos">{producto.descripcion}</p>
                        <p className="datos">${producto.precio}</p>
                        <a className="button is-danger is-outlined datos" onClick={() => this.showModal(producto)}>
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="home-listado-productos">
                <div className="cartas">
                    {productos.map(this.renderCarta)}
                </div>


                {this.state.mostrarModalDeCompra && <ModalArmadoDePedido/>}

            </div>
        )
    }
}