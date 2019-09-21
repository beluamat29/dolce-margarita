import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioLogin {

    static logearAdmin(actualizarProductos) {
        return axios.get(`${SERVICE_URL}/loginAdmin`)
            .then(response => {alert("te logeaste")})
    }


}