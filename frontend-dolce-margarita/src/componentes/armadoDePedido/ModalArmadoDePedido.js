import React from "react";
import './modalArmadoDePedido.scss';
import '../../styles/modal-footer.scss'
import Select from 'react-select';
import DatosDeHuevoParaPedido from "./DatosDeHuevoParaPedido";
import {tiposDeChocolate, chocolateNulo} from '../../constantes';

const moldeSeleccionadoDesdeHome = 'huevo';

export default class ModalArmadoDePedido extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cantidadALlevar: 1,
      tipoDeChocolateALlevar: chocolateNulo,
      paredesRellenas: false
    }
  }

  esHuevo = () => {
    return this.props.esHuevo
  }

  deshabilitar = () => {
    const {
      tipoDeChocolateALlevar,
      cantidadALlevar
    } = this.state;

    return tipoDeChocolateALlevar === chocolateNulo || cantidadALlevar <= 0;
  }

  continuar = () => {
    let pedido = {
      producto: this.props.producto,
      cantidad: this.state.cantidadALlevar,
      precio_total: this.props.producto.precio * this.state.cantidadALlevar,
      tipo_chocolate: this.state.tipoDeChocolateALlevar.value,
    }

    this.props.onConfirm(pedido)
  }

  render() {
    const {producto} = this.props;

    return (
      <div className="modal is-active">
        <div className="modal-background"/>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title title">Arma tu pedido!</p>
            <button className="delete" aria-label="close" onClick={this.props.onClose}/>
          </header>

          <section className="modal-card-body">
            <p className="titulo-producto">{`${producto.nombre} de ${producto.peso_en_gramos}grs`} </p>
            <div className="datos-pedido">
              <p className="subtitle">¿Cuántos vas a llevar?</p>
              <div className="input-cantidad">
                <input
                  min={1}
                  className="input"
                  type="number"
                  value={this.state.cantidadALlevar}
                  onChange={(event) => this.setState({cantidadALlevar: Number(event.target.value)})}/>
              </div>

              <p className="subtitle">¡Elegí el chocolate que más te guste!</p>
              <div className="input-tipo-chocolate">
                <Select className='fafafa'
                  value={this.state.tipoDeChocolateALlevar}
                  onChange={(tipo) => this.setState({tipoDeChocolateALlevar: tipo})}
                  options={tiposDeChocolate}
                />
              </div>

              <div>
                {
                  this.esHuevo() && <DatosDeHuevoParaPedido
                    moldeSeleccionado={moldeSeleccionadoDesdeHome}
                    onChange={(paredes) => this.setState({paredesRellenas: paredes})}/>
                }
              </div>
            </div>
          </section>

          <footer className="modal-card-foot">
            <button className="button" onClick={this.props.onClose}>Cancelar</button>
            <button className="button" disabled={this.deshabilitar()} onClick={this.continuar}>
              Continuar
            </button>
          </footer>
        </div>
      </div>

    )
  }
}
