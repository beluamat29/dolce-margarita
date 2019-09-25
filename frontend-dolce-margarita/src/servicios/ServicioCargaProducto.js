import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioCargaProducto {

    static cargarProducto(producto) {
        return axios.post(`${SERVICE_URL}productos`, {
            nombre: producto.nombre,
            precio: producto.precio,
            descripcion: producto.descripcion,
            peso_en_gramos: producto.peso,
            molde: producto.formatoSeleccionado.value
        })
            .then(response => alert("Tu producto se cargo bien"))
            .catch(e => alert("la carga fallo"))
    }
}