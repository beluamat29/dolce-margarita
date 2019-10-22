import React from 'react';
import './indexPedidos.scss';
import servicioPedidos from "../../servicios/ServicioPedidos";
import InformacionPedido from "./pedido/InformacionPedido";

import Select from "react-select";

const estados = ['EN ESPERA', 'EN PREPARACION', 'FINALIZADO', 'ENTREGADO', 'CANCELADO'];

const estiloEstados = [
    {estado: "ENTREGADO", estilo: "is-success"},
    {estado: "EN ESPERA", estilo: "is-warning"},
    {estado: "EN PREPARACION", estilo: "is-primary"},
    {estado: "FINALIZADO", estilo: "is-info"},
    {estado: "CANCELADO", estilo: "is-danger"},
]

const estiloParaEstado = (nombreEstado) => {
    const estadoYEstilo = estiloEstados.find(estiloEstado => estiloEstado.estado === nombreEstado)
    return estadoYEstilo.estilo;
}

export default class IndexPedidos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pedidosTodos: [],
            pedidosAMostrar: [],
            estadosSeleccionados: []
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
        return this.state.pedidosTodos.filter((pedido) => pedido.estado === estado);
    }

    filtrarPorEstados = () => {
        const {
            estadosSeleccionados,
            pedidosTodos
        } = this.state
        let pedidosFiltrados = [];

        estadosSeleccionados.length === 0
          ? this.setState({pedidosAMostrar: pedidosTodos})
          : estadosSeleccionados.map(estadoSeleccionado => {
              pedidosFiltrados = pedidosFiltrados.concat(this.filtrarPorEstado(estadoSeleccionado))
              this.actualizarPedidosAMostrar(pedidosFiltrados);
          })
    }

    estadoSeleccionado = (estado) => {
        return this.state.estadosSeleccionados.includes(estado)
    }

    actualizarEstadosSeleccionados = (estado) => {
        const nuevosEstados = this.estadoSeleccionado(estado) ? this.eliminarFiltroDeEstadoPedido(estado) : this.agregarFiltroDeEstadoPedido(estado)

        this.setState({estadosSeleccionados: nuevosEstados}, () => this.filtrarPorEstados())
    }

    agregarFiltroDeEstadoPedido = (estado) => {
        const estados = this.state.estadosSeleccionados
        estados.push(estado)
        return estados
    }

    eliminarFiltroDeEstadoPedido = (estado) => {
        return this.state.estadosSeleccionados.filter((estadoSeleccionado) => estadoSeleccionado !== estado)
    }

    renderEstado = (estado) => {
        return (
          <div className="filtro-estado">
              <input
                type="checkbox"
                checked={this.estadoSeleccionado(estado)}
                onChange={() => this.actualizarEstadosSeleccionados(estado)} />
              <label className={`tag ${estiloParaEstado(estado)} is-medium`}> {estado} </label>
          </div>
        )
    }

    render() {
        return (
            <div className="index-pedidos-home">
                <p className="title is-1 is-spaced">Pedidos</p>
                <div className="container-filtrado">
                    <input className="filtro-nombre-cliente" type="text" name="filter" placeholder="Buscar por cliente" onChange={ (event) => this.filtrarPorNombreCliente(event)}/>
                    <div className="filtro-estado-container">
                        {
                            estados.map((estado) => this.renderEstado(estado))
                        }
                    </div>
                </div>
                <div className="rows">
                    {this.state.pedidosAMostrar.map(informacionPedido => <InformacionPedido actualizarPedidos={this.reloadPageWith} pedido={informacionPedido}/>)}
                </div>
            </div>
        )
    }
}
