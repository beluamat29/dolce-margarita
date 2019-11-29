import React from 'react';
import './productosARealizar.scss';
import Select from 'react-select';
import servicio from "../servicios/servicio";
import servicioPedidos from "../servicios/ServicioPedidos";

export default class ProductosARealizar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productoACalcular: null,
            tipoDeChocolate: null,
            mostrarErrorPoducto: false,
            productos: [],
            cantidadARealizar: null,
            renderCantidad: false,
            productoSeleccionado: '',
            pedidosBlancos: [],
            pedidosSemi: [],
            pedidosLeche: []

        }

        this.reloadPageWith()
    }

    reloadPageWith = () => {
        servicioPedidos.pedidosARealizar(this.actualizarListadoProductos)
        servicio.productos(this.actualizarProductos);

    }

    actualizarProductos = (productos) => {
        this.setState({productos: productos});
    }

    actualizarListadoProductos = (productos) => {
        this.setState({pedidosBlancos: productos.pedidos_blancos,
                             pedidosSemi: productos.pedidos_semi_amargo,
                             pedidosLeche: productos.pedidos_con_leche})
    }

    nombresProductos = () => {
        return this.state.productos.map(producto => {
            return  {label: producto.nombre, value: producto.nombre}
        })
    }

    pedidosBlancosPara = (producto) => {
        const pedidosDeProducto = this.state.pedidosBlancos.filter(pedido => pedido.producto_id === producto.id)
        return pedidosDeProducto.map(pedido => pedido.cantidad).reduce((a, b) => a + b, 0)
    }

    pedidosSemiAmargosPara = (producto) => {
        const pedidosDeProducto = this.state.pedidosSemi.filter(pedido => pedido.producto_id === producto.id)
        return pedidosDeProducto.map(pedido => pedido.cantidad).reduce((a, b) => a + b, 0)
    }

    pedidosConLechePara = (producto) => {
        const pedidosDeProducto = this.state.pedidosLeche.filter(pedido => pedido.producto_id === producto.id)
        return pedidosDeProducto.map(pedido => pedido.cantidad).reduce((a, b) => a + b, 0)
    }

    handleChange = (event) => {
        this.setState({productoSeleccionado: event.value})
    }

    esFilaBuscada = (producto) => {
        if (this.state.productoSeleccionado === producto.nombre ){
            return 'fila-seleccionada'
        }
    }
    render() {
        return (
            <div className="productos-a-realizar-home">
                <div className='selector-producto-y-tipo'>
                    <div>
                        <p>Elegí un producto</p>
                        <Select value={this.state.productoSeleccionado.label}
                                options={this.nombresProductos()} placeholder={''}
                                onChange={event => this.handleChange(event)}
                        />
                    </div>
                </div>

                <div className='tabla-contenedor'>
                    <table className='tabla'>
                        <thead>
                            <tr>
                                <th className='columna-producto' rowspan="2">Producto</th>
                                <th className='columna-hacer' colspan="3">Te faltan hacer</th>
                            </tr>
                        </thead>

                        <tbody className='cuerpo-tabla'>
                            <tr>
                                <th></th>
                                <th>Semi amargo</th>
                                <th>Con leche</th>
                                <th>Blanco</th>
                            </tr>

                            {this.state.productos.map(producto =>
                                <tr className={this.esFilaBuscada(producto)}>
                                <th>{producto.nombre}</th>
                                <th className='info-numerica'>{this.pedidosSemiAmargosPara(producto)}</th>
                                <th className='info-numerica'>{this.pedidosConLechePara(producto)}</th>
                                <th className='info-numerica'>{this.pedidosBlancosPara(producto)}</th>
                            </tr> )}

                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
