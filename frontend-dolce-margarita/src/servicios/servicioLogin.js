import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioLogin {

    static validarAdmin(email, password) {
        return axios.post(`${SERVICE_URL}admin`, {
            email: email,
            password: password
        })
    }
}