import React from 'react';
import './pedidosOCargaDeDatos.scss';
import {withRouter} from "react-router-dom";
import {faFileAlt, faArrowAltCircleUp, faChartBar, faCoins} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class PedidosOCargaDeDatos extends React.Component {

    irACargaDeProductos = () => {
        this.props.history.push("/carga-datos")
    }

    irAIndexPedidos = () => {
        this.props.history.push("/pedidos")

    }

    irAProductosARealizar = () => {
        this.props.history.push("/productos-a-realizar")

    }

    irAIndexProductos = () => {
        this.props.history.push("/productos")
    }

    render() {
        return (
            <div className="home-page">
                <div>
                    <div className="pedido-o-carga">
                        <div>
                            <FontAwesomeIcon icon={faFileAlt}/>
                        </div>
                        <div>
                            <p>Chequea los pedidos hechos por tus clientes</p>
                        </div>
                        <div>
                            <a className="button" onClick={() => this.irAIndexPedidos()}>Ver pedidos</a>
                        </div>
                    </div>
                    <div className="pedido-o-carga">
                        <div>
                            <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                        </div>
                        <div>
                            <p>Carga un nuevo producto a la lista de productos</p>
                        </div>
                        <div>
                            <a className="button" onClick={() => this.irACargaDeProductos()}>Cargar</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pedido-o-carga">
                        <div>
                            <FontAwesomeIcon icon={faChartBar}/>
                        </div>
                        <div>
                            <p>Conoce cuántos productos te faltan realizar</p>
                        </div>
                        <div>
                            <a className="button" onClick={() => this.irAProductosARealizar()}>Ir</a>
                        </div>
                    </div>
                    <div className="pedido-o-carga">
                        <div>
                            <FontAwesomeIcon icon={faCoins}/>
                        </div>
                        <div>
                            <p>Conoce la lista de productos disponibles</p>
                        </div>
                        <div>
                            <a className="button" onClick={() => this.irAIndexProductos()}>Ver productos</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
