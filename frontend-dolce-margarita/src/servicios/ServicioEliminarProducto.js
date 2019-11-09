import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioEliminarProducto {

    static eliminarProducto(idProducto, postBorrado) {
        return axios.delete(`${SERVICE_URL}productos/` + idProducto)
            .then(response => postBorrado())
            .catch(e => alert("la eliminacion fallo"))
    }
}