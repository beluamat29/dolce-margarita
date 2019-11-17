import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioCargaProducto {

    static cargarProducto(producto) {
        return axios.post(`${SERVICE_URL}productos`, producto)

    }
}