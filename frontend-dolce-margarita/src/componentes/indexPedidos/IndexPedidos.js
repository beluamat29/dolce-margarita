import React from 'react';
import './indexPedidos.scss';
import servicioPedidos from "../../servicios/ServicioPedidos";
import InformacionPedido from "./pedido/InformacionPedido";

export default class IndexPedidos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pedidosTodos: [],
            pedidosAMostrar: []
        }
    }

    componentDidMount() {
        this.actualizarPedidos(this.obtenerPedidos());
    }

    obtenerPedidos = () => {
        return servicioPedidos.pedidosActuales();
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

    filtrar = (event) => {
        const pedidosFiltrados = this.state.pedidosTodos.filter((pedido) => pedido.nombre_cliente.includes(event.target.value))

        this.actualizarPedidosAMostrar(pedidosFiltrados);
    }

    render() {
        return (
            <div className="index-pedidos-home">
                <p className="title is-1 is-spaced">Pedidos</p>
                <input className="pedidos-filtrar" type="text" name="filter" placeholder="Buscar por cliente" onChange={ (event) => this.filtrar(event)}/>
                <div className="rows">
                    {this.state.pedidosAMostrar.map(informacionPedido => <InformacionPedido pedido={informacionPedido}/>)}
                </div>
            </div>
        )
    }
}
