import React from "react";
import './modalArmadoDePedido.scss';


export default class DatosDeHuevoParaPedido extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p className="subtitle">El tamaño de huevo que elegiste admite paredes rellenas de dulce de leche. ¡Yumm! ¿Te gustaría agregarlas?</p>
                <label className="radio">
                    <input
                        className="radio-dulce-de-leche"
                        type="radio"
                        name="answer"
                        onChange={() => this.props.onChange(true)}/>
                        Si
                </label>
                <label className="radio">
                    <input
                        className="radio-dulce-de-leche"
                        type="radio"
                        name="answer"
                        onChange={() => this.props.onChange(false)}/>
                        No
                </label>
            </div>
        )
    }
}