import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioEdicionProducto {

    static editarProducto(producto, onEdit) {
        return axios.put(`${SERVICE_URL}productos/editar_producto`, producto)
            .then(response => onEdit())
            .catch(e => alert("la edicion fallo"))
    }
}