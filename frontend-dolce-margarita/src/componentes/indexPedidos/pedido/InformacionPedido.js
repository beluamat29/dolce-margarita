import React from 'react';
import '../indexPedidos.scss';

export default class InformacionPedido extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<div className='row'>
            <div className='datos-generales'>
                <div>
                    <p className="nombre-cliente">{this.props.pedido.nombre_cliente}</p>
                </div>
                <div className='nombre-y-boton'>
                    <p className="pedido">{this.props.pedido.nombre_producto + ' ' + this.props.pedido.peso_en_gramos + "grs x " + this.props.pedido.cantidad + 'u'}</p>
                </div>
            </div>

            <div className='datos-generales'>
                <div className='tipo-chocolate'>
                    <p>{'Chocolate ' + this.props.pedido.tipo_chocolate}</p>
                </div>
                <div className='tipo-chocolate'>
                    <p>{'Total: $' + this.props.pedido.precio_total}</p>
                </div>
            </div>

            <div className='separador'>
                <div className='line'/>
                <p className='datos-cliente-texto'>datos del cliente</p>
                <div className='line'/>
            </div>

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
            </div>
        </div>);
    }
}