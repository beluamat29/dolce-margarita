import React from "react";
import servicio from "../../servicios/servicio";
import '../confirmacionDePedido/confirmacion-de-pedido.scss';

export default class PedidoCreado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombreClienteDelPedido: JSON.parse(localStorage.getItem('nombreClienteDelPedido')),
      emailClientePedido: JSON.parse(localStorage.getItem('emailClientePedido')),
      telefonoClientePedido: JSON.parse(localStorage.getItem('telefonoClientePedido')),
      puntoDeRetiro: JSON.parse(localStorage.getItem('puntoDeRetiro')).label,
      medioPago: JSON.parse(localStorage.getItem('medioPago')),
      pedido: JSON.parse(localStorage.getItem('pedido')),
      pagado: props.pagado
    }

    this.confirmarPedido()
  }

  confirmarPedido = () => {
    return servicio.confirmarPedido(
      this.state.pedido,
      this.state.nombreClienteDelPedido,
      this.state.emailClientePedido,
      this.state.telefonoClientePedido,
      this.state.puntoDeRetiro,
      this.state.medioPago,
      this.state.pagado)
      .catch(error => this.props.history.push('/error'))
  }


  volverAlInicio = () => {
    this.props.history.push('/')
  }

  render() {
    const {pedido} = this.state;

    return (
      <div className="confirmacion-pedido">
        <div className="title">
          <p className="title is-1 is-spaced">Gracias por tu compra!!</p>
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
                  disabled={true}
                  type="text"
                  value={this.state.nombreClienteDelPedido}
                  readOnly={true}
                />
              </div>

              <div className="field">
                <p className="subtitle">Punto de retiro</p>
                <input
                  disabled={true}
                  className="input field nombre-cliente"
                  type="text"
                  value={this.state.puntoDeRetiro}
                  readOnly={true}
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <p className="subtitle">Email</p>
                <input
                  disabled={true}
                  className="input field nombre-cliente"
                  type="text"
                  value={this.state.emailClientePedido}
                  readOnly={true}
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <p className="subtitle">Telefono</p>

                <input
                  disabled={true}
                  className="input field nombre-cliente"
                  type="number"
                  value={this.state.telefonoClientePedido}
                  readOnly={true}
                  />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <p className="subtitle">Estado del pago</p>

                <input
                  disabled={true}
                  className="input field nombre-cliente"
                  type="text"
                  value={this.props.estadoDelPago}
                  readOnly={true}
                />
              </div>

              <div className="field">
                <p className="subtitle is-5 producto-y-cantidad-text">
                  {`${pedido.producto.nombre} ${pedido.producto.peso_en_gramos}gr x ${pedido.cantidad} u.`}
                </p>
              </div>
            </div>

            <div className="field-row total-row">
              <p>Total: {`$ ${pedido.precio_total}`}</p>
            </div>
          </div>

          <footer className="card-footer">
            <button className="button is-danger" onClick={this.volverAlInicio}>Volver al Inicio</button>
          </footer>
        </div>
      </div>
    )
  }
}


