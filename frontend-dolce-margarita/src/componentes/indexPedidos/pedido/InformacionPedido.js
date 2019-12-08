import React from 'react';
import '../indexPedidos.scss';
import LabelEstadoPedido from "./LabelEstadoPedido";
import servicioPedidos from "../../../servicios/ServicioPedidos";
import {estados} from "../../../constantes";
import Select from "react-select";

export default class InformacionPedido extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrarInformacion: false,
            estado: props.pedido.estado
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {pedido} = this.props;

        if(pedido.estado !== prevState.estado) {
            this.setState({estado: pedido.estado})
        }
    }

    mostrarUOcultarInformacion = () => {
        this.setState({mostrarInformacion: !this.state.mostrarInformacion})
    }

    sePuedeCancelarPedido = () => {
        return (this.state.estado === 'EN ESPERA' || this.state.estado === 'EN PREPARACION')
    }

    cancelarPedido = () => {
        return servicioPedidos.cancelarPedido(this.props.pedido, 'CANCELADO')
            .then(response => {
                this.setState({estado: response.data.estado}, this.props.reloadPageWith)
            })
    }

    cambiarEstado = (estado) => {
        return servicioPedidos.cancelarPedido(this.props.pedido, estado.value)
          .then(response => {this.setState({estado: estado.label})})
    }

    render() {
        const {pedido} = this.props

        return (
          <div className='row'>
            <div className='datos-generales'>
                <div className='nombre-y-estado'>
                    <div>
                        <p className="nombre-cliente">{pedido.nombre_cliente}</p>
                    </div>
                    <div>
                        <LabelEstadoPedido estadoPedido={this.state.estado}/>
                    </div>
                </div>
                <div className='nombre-y-boton'>
                    <p className="pedido">{pedido.nombre_producto + ' ' + pedido.peso_en_gramos + "grs x " + pedido.cantidad + 'u'}</p>
                    <a className='button' onClick={()=>this.mostrarUOcultarInformacion()}>{this.state.mostrarInformacion ? 'Ocultar' : 'Ver'}</a>
                </div>
            </div>

            {this.state.mostrarInformacion &&
            <div className='datos-generales'>
                <div className='tipo-chocolate'>
                    <p>{'Chocolate ' + pedido.tipo_chocolate}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Total: $' + pedido.precio_total}</p>
                </div>
            </div>}

            {this.state.mostrarInformacion &&
            <div className='separador'>
                <div className='line'/>
                <p className='datos-cliente-texto'>datos del cliente</p>
                <div className='line'/>
            </div>}

            {this.state.mostrarInformacion &&
            <div className='datos-contacto-cliente'>
                <div className='tipo-chocolate'>
                    <p>{'Email: ' + pedido.email_cliente}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Telefono: ' + pedido.telefono_cliente}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Punto de retiro: ' + pedido.lugar_retiro}</p>
                </div>
                <div className="bottom-row">
                    <div className='tipo-chocolate' style={{padding: '15px'}}>
                        {this.sePuedeCancelarPedido() && <a className='button' onClick={this.cancelarPedido}>Cancelar</a>}
                    </div>
                    <div className="selector-estados">
                        <Select
                          placeholder={this.state.estado}
                          value={this.state.estado}
                          onChange={(estadoSeleccionado) => this.cambiarEstado(estadoSeleccionado)}
                          options={estados}
                        />
                    </div>
                </div>
            </div>}
          </div>
        );
    }
}
