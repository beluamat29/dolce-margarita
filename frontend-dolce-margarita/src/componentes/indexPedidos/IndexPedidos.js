import React from 'react';
import './indexPedidos.scss';
import servicioPedidos from "../../servicios/ServicioPedidos";
import Navbar from "../navbar/Navbar";
import ModalArmadoDePedido from "../armadoDePedido/ModalArmadoDePedido";

export default class IndexPedidos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pedido: {
                nombre_producto: "Conejito",
                peso_en_gramos: 235,
                cantidad: 3,
                tipo_chocolate: 'semi amargo',
                precio_total: 350.00,
                nombre_cliente: 'Lucas Avalos',
                email_cliente: 'eltumba@gmail.com',
                telefono_cliente: 1122445566,
                lugar_retiro: 'Calle 6 5047'
            },
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

    renderPedido = (pedido) => {
        return (<div className='row'>
                    <p className="nombre-cliente">{pedido.nombre_cliente}</p>
                    <p className="pedido">{pedido.nombre_producto + ' ' + pedido.peso_en_gramos + "grs x " + pedido.cantidad + 'u'}</p>
                </div>);
    }

    render() {
        return (
            <div className="index-pedidos-home">
                <div className="rows">
                    {this.state.pedidos.map(this.renderPedido)}
                </div>
            </div>
        )
    }
}