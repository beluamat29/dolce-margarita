import './listadoDeProductos.scss';
import React from "react";
import ModalArmadoDePedido from "../armadoDePedido/ModalArmadoDePedido";
import Navbar from "../navbar/Navbar";
import servicio from "../../servicios/servicio";
import {withRouter} from "react-router-dom";


class ListadoDeProductos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrarModalDeCompra: false,
            producto: null,
            productos: []
        }
    }

    componentDidMount() {
        this.reloadPageWith(this.props.moldeSeleccionado, this.actualizarProductos);
    }

    reloadPageWith = (molde) => {
        servicio.productosConMolde(molde, this.actualizarProductos);
    }

    irAPaginaConfirmacionDePedido = (pedido) => {
        this.props.onConfirm(pedido)
        this.props.history.push("/confirmacion")
    }

    actualizarProductos = (productos) => {
        console.log(productos)
        this.setState({productos});
    }

    showModal = (producto) => {
        this.setState({
            producto,
            mostrarModalDeCompra: true
        });
    };

    renderImage = (producto) => {
        return producto.picture.url
          ? <img src={require(`../../../../backend/public${producto.picture.url}`)} />
          : <img src={require('../../assets/bombones.jpg')} />
    }

    renderCarta = (producto, index) => {
        return (
            <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-content">
                            { this.renderImage(producto) }
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
                <Navbar itemClick={this.reloadPageWith}/>
                <div className="cartas">
                    {this.state.productos.map(this.renderCarta)}
                </div>

                {this.state.mostrarModalDeCompra &&
                <ModalArmadoDePedido
                    onConfirm={this.irAPaginaConfirmacionDePedido}
                    producto={this.state.producto}
                    onClose={()=>this.setState({mostrarModalDeCompra: false})}
                    esHuevo={this.props.moldeSeleccionado === 'huevos'}
                />}
            </div>
        )
    }
}

export default withRouter(ListadoDeProductos);
