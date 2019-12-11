import React from 'react';
import './confirmacion-de-pedido.scss';
import Select from "react-select";
import servicio from "../../servicios/servicio";
import {puntosDeRetiro} from '../../constantes';

export default class ConfirmacionDePedido extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreClienteDelPedido: '',
      emailClientePedido: '',
      telefonoClientePedido: '',
      puntoDeRetiro: '',
      medioPago: '',
      pedido: JSON.parse(localStorage.getItem('pedido')) || props.pedido,

    }
  }

  deshabilitar = () => {
    const {
      nombreClienteDelPedido,
      emailClientePedido,
      telefonoClientePedido,
      puntoDeRetiro,
      medioPago
    } = this.state;

    return nombreClienteDelPedido === '' || emailClientePedido === '' || telefonoClientePedido === '' || puntoDeRetiro === '' || medioPago === ''
  }

  confirmarPedido = () => {
    const {
      nombreClienteDelPedido,
      emailClientePedido,
      telefonoClientePedido,
      puntoDeRetiro,
      medioPago
    } = this.state;

    if(medioPago === 'efectivo') {
      this.props.history.push('/creado')
    } else {
      servicio.pagarPedido(this.state.pedido, nombreClienteDelPedido, emailClientePedido, telefonoClientePedido, puntoDeRetiro.label)
        .then(init_point => {
          window.location = init_point
        })
    }
  }

  elegirMedioPago = (event) => {
    localStorage.setItem('medioPago', JSON.stringify(event.target.value))
    this.setState({medioPago: event.target.value})
  }

  setEmailCliente = (emailCliente) => {
    localStorage.setItem('emailClientePedido', JSON.stringify(emailCliente))
    this.setState({emailClientePedido: emailCliente})
  }

  setNombreCliente = (nombreCliente) => {
    localStorage.setItem('nombreClienteDelPedido', JSON.stringify(nombreCliente))
    this.setState({nombreClienteDelPedido: nombreCliente})
  }

  setTelefonoCliente = (telefonoCliente) => {
    localStorage.setItem('telefonoClientePedido', JSON.stringify(telefonoCliente))
    this.setState({telefonoClientePedido: telefonoCliente})
  }

  setPuntoRetiro = (puntosDeRetiro) => {
    localStorage.setItem('puntoDeRetiro', JSON.stringify(puntosDeRetiro))
    this.setState({puntoDeRetiro: puntosDeRetiro})
  }

  cancelar = () => {
    this.props.history.push('/')
  }

  render() {
    const {pedido} = this.state;

    return (
      <div className="confirmacion-pedido">
        <div className="title">
          <p className="title is-1 is-spaced">Confirmación de pedido</p>
        </div>

        <div className="card pedido">
          <header className="card-header">
            <p className="card-header-title">
              {pedido.producto.nombre}
            </p>
          </header>

          <div className="card-content">
            <div className="field-row">
              <div className="field">
                <p className="subtitle">Nombre</p>
                <input
                  className="input field nombre-cliente"
                  type="text"
                  value={this.state.nombreClienteDelPedido}
                  onChange={(event) => this.setNombreCliente(event.target.value)}
                />
              </div>

              <div className="field">
                <p className="subtitle">Punto de retiro</p>
                <Select
                  placeholder={''}
                  className="field nombre-cliente"
                  value={this.state.puntoDeRetiro}
                  onChange={(puntoRetiro) => this.setPuntoRetiro(puntoRetiro)}
                  options={puntosDeRetiro}
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <p className="subtitle">Email</p>
                <input
                  className="input field nombre-cliente"
                  type="text"
                  value={this.state.emailClientePedido}
                  onChange={(event) => this.setEmailCliente(event.target.value)}
                />
              </div>

              <div className="field">
                <p className="subtitle retiro-text">¡Elegí el punto de entrega que quieras! Te avisamos cuando tu pedido
                  esté listo para que lo pases a buscar</p>
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <p className="subtitle">Telefono</p>

                <input
                  className="input field nombre-cliente"
                  type="number"
                  value={this.state.telefonoClientePedido}
                  onChange={(event) => this.setTelefonoCliente(event.target.value)}/>
              </div>

              <div className="field">
                <p className="subtitle is-5 producto-y-cantidad-text">
                  {`${pedido.producto.nombre} ${pedido.producto.peso_en_gramos}gr $${pedido.producto.precio} x ${pedido.cantidad} u.`}
                </p>
              </div>
            </div>

            <div className="forma-pago">
              <p className="subtitle">Elegí tu forma de pago</p>
              <label>
                <input type="radio" value="efectivo" checked={this.state.medioPago === 'efectivo'} onChange={this.elegirMedioPago}/>
                Efectivo (al momento de entrega)
              </label>
              <label>
                <input type="radio" value="tarjeta" checked={this.state.medioPago === 'tarjeta'} onChange={this.elegirMedioPago}/>
                Mercado Pago
              </label>
            </div>

            <div className="field-row total-row">
              <p>Total: {`$ ${pedido.precio_total}`}</p>
            </div>
          </div>

          <footer className="card-footer">
            <a className="button button-confirmar" disabled={this.deshabilitar()} onClick={this.confirmarPedido}>Aceptar</a>
            <a className="button button-confirmar" onClick={this.cancelar}>Cancelar</a>
          </footer>
        </div>
      </div>
    )
  }
}
