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

  calcularTotal = () => {
    const {pedido} = this.props;

    return pedido.producto.precio * pedido.cantidad
  }

  confirmarPedido = () => {
    const {
      nombreClienteDelPedido,
      emailClientePedido,
      telefonoClientePedido,
      puntoDeRetiro
    } = this.state;

    servicio.confirmarPedido(this.props.pedido, nombreClienteDelPedido, emailClientePedido, telefonoClientePedido, puntoDeRetiro.label)
  }

  mercadoPago = () => {
    const {
      nombreClienteDelPedido,
      emailClientePedido,
      telefonoClientePedido,
      puntoDeRetiro
    } = this.state;

    servicio.pagarPedido(this.props.pedido, nombreClienteDelPedido, emailClientePedido, telefonoClientePedido, puntoDeRetiro.label)
      .then(init_point => {
        this.setState({
          init_point,
          pagar: true
        })
      })

      .catch(e => console.log(e))
  }

  elegirMedioPago = (event) => {
    this.setState({medioPago: event.target.value})
  }

  render() {
    const {pedido} = this.props;

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
                  onChange={(event) => this.setState({nombreClienteDelPedido: event.target.value})}
                />
              </div>

              <div className="field">
                <p className="subtitle">Punto de retiro</p>
                <Select
                  placeholder={''}
                  className="field nombre-cliente"
                  value={this.state.puntoDeRetiro}
                  onChange={(tipo) => this.setState({puntoDeRetiro: tipo})}
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
                  onChange={(event) => this.setState({emailClientePedido: event.target.value})}
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
                  onChange={(event) => this.setState({telefonoClientePedido: event.target.value})}/>
              </div>

              <div className="field">
                <p className="subtitle is-5 producto-y-cantidad-text">
                  {`${pedido.producto.nombre} ${pedido.producto.peso_en_gramos}gr x ${pedido.cantidad} u.`}
                </p>
              </div>
            </div>

            <div className="forma-pago">
              <p className="subtitle">Elegí tu forma de pago</p>
              <label>
                <input type="radio" value="efectivo" checked={this.state.medioPago === 'efectivo'} onChange={this.elegirMedioPago}/>
                Efectivo
              </label>
              <label>
                <input type="radio" value="tarjeta" checked={this.state.medioPago === 'tarjeta'} onChange={this.elegirMedioPago}/>
                Tarjeta
              </label>
            </div>

            <div className="field-row total-row">
              <p>Total: {`$ ${pedido.precio_total}`}</p>
            </div>
          </div>

          <footer className="card-footer">
            {/*{ this.state.pagar && <a href={this.state.init_point}>Pagar</a> }*/}
            <button className="button is-danger" disabled={this.deshabilitar()} onClick={this.mercadoPago}>Aceptar</button>
            {/*<button className="button is-success" onClick={this.confirmarPedido}>Continuar</button>*/}
            <button className="button is-danger" onClick={this.props.onClose}>Cancelar</button>
          </footer>
        </div>
      </div>
    )
  }
}
