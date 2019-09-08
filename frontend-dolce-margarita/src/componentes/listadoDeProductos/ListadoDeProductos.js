import './listadoDeProductos.scss';
import React from "react";
import ModalArmadoDePedido from "../armadoDePedido/ModalArmadoDePedido";
import servicio from "../../servicios/servicio";


export default class ListadoDeProductos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrarModalDeCompra: false,
            nombreProductoSeleccionado: "",
            precioProductoSeleccionado: "",
            productos: []
        }
    }

    componentDidMount() {
        this.obtenerProductos(this.props.moldeSeleccionado)
    }

    obtenerProductos = (molde) => {
        let productos = (() => {
            switch (molde) {
                case 'figuras':
                    return servicio.listadoFiguras();
                case 'bombones':
                    return servicio.listadoBombones();
                case 'huevos':
                    return servicio.listadoHuevos();
            }
        })()
        this.setState({productos});
    }

    showModal = (producto) => {
        this.setState({ mostrarModalDeCompra: true,
            nombreProductoSeleccionado: producto.nombre,
            precioProductoSeleccionado: producto.precio,
            pesoProductoSeleccionado: producto.peso
            });
    };

    renderCarta = (producto) => {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-content">
                            <img src={require('../../assets/bombones.jpg')} />
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
                    {this.state.productos.map(this.renderCarta)}
                </div>

                {this.state.mostrarModalDeCompra &&
                <ModalArmadoDePedido
                    pesoProducto={this.state.pesoProductoSeleccionado}
                    nombreProducto={this.state.nombreProductoSeleccionado}
                    precioProducto={this.state.precioProductoSeleccionado}
                    onClose={()=>this.setState({mostrarModalDeCompra: false})}
                />}
            </div>
        )
    }
}