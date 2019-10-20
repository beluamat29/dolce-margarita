import React from 'react';
import './indexPedidos.scss';
import servicioPedidos from "../../servicios/ServicioPedidos";
import InformacionPedido from "./pedido/InformacionPedido";
import Select from "react-select";

const estados = [
    {value: 'EN ESPERA', label: 'En espera'},
    {value: 'EN PREPARACIÓN', label: 'En preparación'},
    {value: 'ENTREGADO', label: 'Entregado'},
    {value: 'FINALIZADO', label: 'Finalizado'},
    {value: 'CANCELADO', label: 'Cancelado'},
];

export default class IndexPedidos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pedidosTodos: [],
            pedidosAMostrar: [],
        }
    }

    componentDidMount() {
        this.reloadPageWith(this.actualizarPedidos);
    }

    reloadPageWith = () => {
        return servicioPedidos.pedidosActuales(this.actualizarPedidos);
    }

    actualizarPedidos = (pedidos) => {
        this.setState({
            pedidosTodos: pedidos,
            pedidosAMostrar: pedidos
        });
    }

    actualizarPedidosAMostrar = (pedidosAMostrar) => {
        this.setState({ pedidosAMostrar });
    }

    filtrarPorNombreCliente = (event) => {
        const pedidosFiltrados = this.state.pedidosTodos.filter((pedido) => pedido.nombre_cliente.includes(event.target.value))

        this.actualizarPedidosAMostrar(pedidosFiltrados);
    }

    filtrarPorEstado = (estado) => {
        const pedidosFiltrados = this.state.pedidosTodos.filter((pedido) => pedido.estado === estado.value);

        this.actualizarPedidosAMostrar(pedidosFiltrados);
    }

    render() {
        return (
            <div className="index-pedidos-home">
                <p className="title is-1 is-spaced">Pedidos</p>
                <div className="container-filtrado">
                    <input className="pedidos-filtrar" type="text" name="filter" placeholder="Buscar por cliente" onChange={ (event) => this.filtrarPorNombreCliente(event)}/>
                    <Select className="selector-estado"
                            placeholder="Buscar por Estado"
                            onChange={(estado) => this.filtrarPorEstado(estado)}
                            options={estados}
                    />
                </div>
                <div className="rows">
                    {this.state.pedidosAMostrar.map(informacionPedido => <InformacionPedido pedido={informacionPedido}/>)}
                </div>
            </div>
        )
    }
}
