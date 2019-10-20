import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioPedidos {

    static pedidosActuales(actualizarPedidos) {
        return axios.get(`${SERVICE_URL}/pedidos`)
            .then(response => {actualizarPedidos(response.data)})
    }

    static cancelarPedido(pedido) {
        return axios.put(`${SERVICE_URL}/estadoPedidos`, {
            id: pedido.id,
            estado: 'CANCELADO'
        })
    }
}