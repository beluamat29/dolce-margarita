import './listadoDeProductos.scss';
import {productos} from "./listado-hasta-que-mica-levante-el-back";
import React from "react";

export default class ListadoDeProductos extends React.Component {
    renderCarta = (producto) => {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-content">
                            <img src={require('./bombones.jpg')} />
                        </div>
                        <div className="flip-card-footer">
                            <p>{producto.nombre}</p>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="datos">{producto.descripcion}</p>
                        <p className="datos">${producto.precio}</p>
                        <a className="button is-danger is-outlined datos">Comprar</a>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="home-listado-productos">
                <div className="cartas">
                    {productos.map(this.renderCarta)}
                </div>
            </div>
        )
    }
}