import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class Servicio {

    static productosConMolde(molde, actualizarProductos) {
        return (() => {
            switch (molde) {
                case 'figuras':
                    return this.listadoFiguras(actualizarProductos);
                case 'bombones':
                    return this.listadoBombones(actualizarProductos);
                case 'huevos':
                    return this.listadoHuevos(actualizarProductos);
            }
        })()
    }

    static listadoFiguras(actualizarProductos) {
        return axios.get(`${SERVICE_URL}/productos/figuras`)
            .then(response => {actualizarProductos(response.data)})
    }

    static listadoHuevos(actualizarProductos) {
        return axios.get(`${SERVICE_URL}/productos/huevos`)
            .then(response => {actualizarProductos(response.data)})
    }

    static listadoBombones(actualizarProductos) {
        return axios.get(`${SERVICE_URL}/productos/bombones`)
            .then(response => {actualizarProductos(response.data)})
    }

    static confirmarPedido(pedido, nombreCliente, emailCliente, telefonoCliente, puntoDeRetiro) {
        return axios.post(`${SERVICE_URL}pedido/crear`, {
            pedido: pedido,
            nombre_cliente: nombreCliente,
            email_cliente: emailCliente,
            telefono_cliente: telefonoCliente,
            punto_retiro: puntoDeRetiro
        })
          .then(response => window.open(response))
    }
}