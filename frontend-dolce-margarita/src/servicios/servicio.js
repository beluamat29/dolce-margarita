import * as axios from 'axios';
import {bombones, figuras, huevos} from "../componentes/listadoDeProductos/listado-hasta-que-mica-levante-el-back";

const SERVICE_URL = 'http://localhost:3000/';

export default class Servicio {

    static productosConMolde(molde) {
        return (() => {
            switch (molde) {
                case 'figuras':
                    return this.listadoFiguras();
                case 'bombones':
                    return this.listadoBombones();
                case 'huevos':
                    return this.listadoHuevos();
            }
        })()
    }

    static listadoFiguras() {
        return figuras;
        // return axios.get(`${SERVICE_URL}/figuras`)
        //     .then(response => onSuccess(response.data))
        //     .catch(error => onFailure())
    }

    static listadoHuevos() {
        return huevos;
    }

    static listadoBombones() {
        return bombones
    }
}