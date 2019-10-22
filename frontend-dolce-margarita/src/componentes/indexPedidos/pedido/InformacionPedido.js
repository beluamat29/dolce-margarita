import React from 'react';
import '../indexPedidos.scss';

const estiloEstados = [
    {estado: "ENTREGADO", estilo: "is-success"},
    {estado: "EN ESPERA", estilo: "is-light"},
    {estado: "EN PREPARACION", estilo: "is-warning"},
    {estado: "FINALIZADO", estilo: "is-info"},
    {estado: "CANCELADO", estilo: "is-danger"},
]

const estiloParaEstado = (nombreEstado) => {
    const estadoYEstilo = estiloEstados.find(estiloEstado => estiloEstado.estado === nombreEstado)
    return estadoYEstilo.estilo;
}

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
        const {pedido} = this.props

        return (
          <div className='row'>
            <div className='datos-generales'>
                <div className='nombre-y-estado'>
                    <div>
                        <p className="nombre-cliente">{pedido.nombre_cliente}</p>
                    </div>
                    <div>
                        <span className={`tag ${estiloParaEstado(pedido.estado)} is-medium`}>{pedido.estado}</span>
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
            </div>}
          </div>
        );
    }
}
