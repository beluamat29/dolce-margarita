import React from 'react';

export default class LabelEstadoPedido extends React.Component {

    render() {
        return (<div>
            {this.props.estadoPedido === 'EN ESPERA' && <span className="tag is-warning is-medium">En espera</span>}
            {this.props.estadoPedido === 'EN PREPARACION' && <span className="tag is-primary is-medium">En preparación</span>}
            {this.props.estadoPedido === 'FINALIZADO' && <span className="tag is-info is-medium">Finalizado</span>}
            {this.props.estadoPedido === 'ENTREGADO' && <span className="tag is-success is-medium">Entregado</span>}
            {this.props.estadoPedido === 'CANCELADO' && <span className="tag is-danger is-medium">Cancelado</span>}
        </div>)
    }
}
