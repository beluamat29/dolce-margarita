import React from 'react';
import '../indexPedidos.scss';

export default class InformacionPedido extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mostrarInformacion: false
        }
    }

    mostrarUOcultarInformacion = () => {
        this.setState({mostrarInformacion: !this.state.mostrarInformacion})
    }

    render() {
        return (
          <div className='row'>
            <div className='datos-generales'>
                <div className='nombre-y-estado'>
                    <div>
                        <p className="nombre-cliente">{this.props.pedido.nombre_cliente}</p>
                    </div>
                    <div>
                        <span className="tag is-success is-medium">{this.props.pedido.estado}</span>
                    </div>
                </div>
                <div className='nombre-y-boton'>
                    <p className="pedido">{this.props.pedido.nombre_producto + ' ' + this.props.pedido.peso_en_gramos + "grs x " + this.props.pedido.cantidad + 'u'}</p>
                    <a className='button' onClick={()=>this.mostrarUOcultarInformacion()}>{this.state.mostrarInformacion ? 'Ocultar' : 'Ver'}</a>
                </div>
            </div>

            {this.state.mostrarInformacion &&
            <div className='datos-generales'>
                <div className='tipo-chocolate'>
                    <p>{'Chocolate ' + this.props.pedido.tipo_chocolate}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Total: $' + this.props.pedido.precio_total}</p>
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
                    <p>{'Email: ' + this.props.pedido.email_cliente}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Telefono: ' + this.props.pedido.telefono_cliente}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Punto de retiro: ' + this.props.pedido.lugar_retiro}</p>
                </div>
            </div>}
          </div>
        );
    }
}
