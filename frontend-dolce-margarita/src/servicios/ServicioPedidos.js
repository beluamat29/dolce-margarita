import * as axios from 'axios';
const SERVICE_URL = 'http://localhost:3000/';

export default class ServicioPedidos {

    static pedidosActuales() {
        return [
            {
                nombre_producto: "Conejito",
                peso_en_gramos: 235,
                cantidad: 3,
                tipo_chocolate: 'semi amargo',
                precio_total: 350.00,
                nombre_cliente: 'Lucas Avalos',
                email_cliente: 'eltumba@gmail.com',
                telefono_cliente: 1122445566,
                lugar_retiro: 'Calle 6 5047'
            },
            {
                nombre_producto: "Balde Huevitos",
                peso_en_gramos: 235,
                cantidad: 1,
                tipo_chocolate: 'blanco',
                precio_total: 350.00,
                nombre_cliente: 'Luli Alonso',
                email_cliente: 'lulipop@gmail.com',
                telefono_cliente: 1122445566,
                lugar_retiro: 'Calle 6 5047'
            },
            {
                nombre_producto: "Conejito",
                peso_en_gramos: 235,
                cantidad: 3,
                tipo_chocolate: 'con leche',
                precio_total: 350.00,
                nombre_cliente: 'Lucas Avalos',
                email_cliente: 'eltumba@gmail.com',
                telefono_cliente: 1122445566,
                lugar_retiro: 'Calle 6 5047'
            },
            {
                nombre_producto: "Conejito",
                peso_en_gramos: 70,
                cantidad: 6,
                tipo_chocolate: 'semi amargo',
                precio_total: 500.00,
                nombre_cliente: 'Maria Belen Amat',
                email_cliente: 'belu@gmail.com',
                telefono_cliente: 1122445566,
                lugar_retiro: 'Pedriel 27 - CABA'
            }
        ]
    }
}