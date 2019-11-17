import React from 'react';
import '../indexPedidos.scss';
import LabelEstadoPedido from "./LabelEstadoPedido";
import servicioPedidos from "../../../servicios/ServicioPedidos";
import {estados, estiloEstados} from "../../../constantes";

const estiloParaEstado = (nombreEstado) => {
  const estadoYEstilo = estiloEstados.find(estiloEstado => estiloEstado.estado === nombreEstado)
  return estadoYEstilo.estilo;
}

export default class InformacionPedido extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostrarInformacion: false,
      estado: this.obtenerObjetoEstado(props.pedido.estado)
    }
  }

  obtenerObjetoEstado = (estadoAEncontrar) => {
    return estados.find(estado => estado.actual === estadoAEncontrar)
  }

  mostrarUOcultarInformacion = () => {
    this.setState({mostrarInformacion: !this.state.mostrarInformacion})
  }

  sePuedeCancelarPedido = () => {
    return (this.state.estado.actual === 'EN ESPERA' || this.state.estado.actual === 'EN PREPARACION')
  }

  pasarASiguienteEstado = (estado) => {
    return servicioPedidos.cambiarEstadoPedido(this.props.pedido, estado)
      .then(estado => this.setState({estado}))
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
              <LabelEstadoPedido estadoPedido={this.state.estado.actual}/>
            </div>
          </div>
          <div className='nombre-y-boton'>
            <p
              className="pedido">{pedido.nombre_producto + ' ' + pedido.peso_en_gramos + "grs x " + pedido.cantidad + 'u'}</p>
            <a className='button'
               onClick={() => this.mostrarUOcultarInformacion()}>{this.state.mostrarInformacion ? 'Ocultar' : 'Ver'}</a>
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
          <div className='tipo-chocolate button-row'>
            {this.sePuedeCancelarPedido() && <a className='button' onClick={() => this.pasarASiguienteEstado('CANCELADO')}>Cancelar</a>}
            <button className="button" onClick={() => this.pasarASiguienteEstado(this.state.estado.siguiente)}>Siguiente Estado</button>
          </div>
        </div>}
      </div>
    );
  }
}
