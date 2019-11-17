import './listadoDeProductos.scss';
import React from "react";
import ModalArmadoDePedido from "../armadoDePedido/ModalArmadoDePedido";
import Navbar from "../navbar/Navbar";
import servicio from "../../servicios/servicio";
import {withRouter} from "react-router-dom";
import ModalEdicionProducto from "../edicionProducto/ModalEdicionProducto";
import servicioEliminar from "../../servicios/ServicioEliminarProducto";
import ModalEliminarProducto from "../borradoDeProducto/ModalEliminarProducto";

class ListadoDeProductos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrarModalDeCompra: false,
            mostrarModalDeEdicion: false,
            mostrarModalAdvertenciaBorrado: false,
            producto: null,
            productos: []
        }
    }

    componentDidMount() {
        this.reloadPageWith(this.props.moldeSeleccionado, this.actualizarProductos);
    }

    reloadPageWith = (molde) => {
        this.props.onCambioMolde(molde)
        servicio.productosConMolde(molde, this.actualizarProductos);
    }

    irAPaginaConfirmacionDePedido = (pedido) => {
        this.props.onConfirm(pedido)
        this.props.history.push("/confirmacion")
    }

    actualizarProductosPostEdicion = () => {
        this.setState({mostrarModalDeEdicion: false})
        this.reloadPageWith(this.props.moldeSeleccionado)
    }

    actualizarProductos = (productos) => {
        this.setState({productos});
    }

    showModal = (producto) => {
        this.setState({
            producto,
            mostrarModalDeCompra: true
        });
    };

    mostrarModalAdvertencia = (producto) => {
        this.setState({mostrarModalAdvertenciaBorrado: true, producto: producto})
    }

    editarProducto = (producto) => {
        this.setState({
            producto,
            mostrarModalDeEdicion: true
        });
    }

    eliminarProducto = () => {
        this.setState({mostrarModalAdvertenciaBorrado: false})
        servicioEliminar.eliminarProducto(this.state.producto.id, this.actualizarProductosPostEdicion)
    }

    renderImage = (producto) => {
        return producto.picture.url
            ? <img src={require(`../../../../backend/public${producto.picture.url}`)}/>
            : <img src={require('../../assets/bombones.jpg')}/>
    }

    renderCarta = (producto) => {
        return (<div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {producto.nombre}
                </p>
                <p className="card-header-title precio">
                    ${producto.precio}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    { this.renderImage(producto) }
                </div>
            </div>
            <footer className="card-footer">
                <div className='botonera'>
                    {this.props.adminLogeado &&
                    <a className=" card-footer-item button editar-button" onClick={() => this.editarProducto(producto)}>
                        Editar
                    </a>}

                    {this.props.adminLogeado &&
                         <a className="card-footer-item button is-danger" onClick={() => this.mostrarModalAdvertencia(producto)}>
                        Eliminar
                     </a>}

                    {!this.props.adminLogeado &&
                    <a className="card-footer-item button comprar-button" onClick={() => this.showModal(producto)}>
                        Comprar
                    </a>}
                </div>
            </footer>
        </div>
    )
    }

    render() {
        return (
        <div className="home-listado-productos">
        <Navbar itemClick={this.reloadPageWith}
                adminLogeado={this.props.adminLogeado}
                history={this.props.history}
                deslogearAdmin={this.props.onSignOut}/>
        <div className="cartas">
        {this.state.productos.map(this.renderCarta)}
        </div>

        {this.state.mostrarModalDeCompra &&
        <ModalArmadoDePedido
            onConfirm={this.irAPaginaConfirmacionDePedido}
            producto={this.state.producto}
            onClose={() => this.setState({mostrarModalDeCompra: false})}
            esHuevo={this.props.moldeSeleccionado === 'huevos'}
        />}

        {this.state.mostrarModalDeEdicion &&
        <ModalEdicionProducto
            producto={this.state.producto}
            onClose={() => this.setState({mostrarModalDeEdicion: false})}
            esHuevo={this.props.moldeSeleccionado === 'huevos'}
            onEdit={this.actualizarProductosPostEdicion}
        />}

        {this.state.mostrarModalAdvertenciaBorrado &&
        <ModalEliminarProducto
            onClose={() => this.setState({mostrarModalAdvertenciaBorrado: false})}
            onEliminar={() => this.eliminarProducto()}
        />}
        </div>
        )
    }
    }

    export default withRouter(ListadoDeProductos);
