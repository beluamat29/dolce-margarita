import React from 'react';
import './indexPedidos.scss';
import servicioPedidos from "../../servicios/ServicioPedidos";

export default class IndexPedidos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pedidos: []
        }
    }

    componentDidMount() {
        this.actualizarPedidos(this.obtenerPedidos());
    }

    obtenerPedidos = () => {
        return servicioPedidos.pedidosActuales();
    }

    actualizarPedidos = (pedidos) => {
        this.setState({pedidos});
    }

    render() {
        return (
            <div className="index-pedidos-home ">
                <p>holis</p>
            </div>
        )
    }
}