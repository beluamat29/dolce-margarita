export const tiposDeChocolate = [
    { value: 'semi amargo', label: 'Chocolate semi amargo' },
    { value: 'con leche', label: 'Chocolate con leche' },
    { value: 'blanco', label: 'Chocolate blanco' },
];

export const chocolateNulo = {
    //Se usa como valor default para cuando arranca el dropdown
    value: 'chocolatenulo', label: ''
}

export const puntosDeRetiro = [
    { value: '1', label: 'Calle 6 5047 - Berazategui' },
    { value: '2', label: 'Calle 13 4826 - Berazategui'},
    { value: '3', label: 'Perdriel 74 - CABA' },
];

export const moldes = [
    {nombreCategoria: 'figuras', tituloCarta: 'Figuras'},
    {nombreCategoria: 'bombones', tituloCarta: 'Bombonería'},
    {nombreCategoria: 'huevos', tituloCarta: 'Huevos'}
];

export const estiloEstados = [
    {estado: "ENTREGADO", estilo: "is-success"},
    {estado: "EN ESPERA", estilo: "is-light"},
    {estado: "EN PREPARACION", estilo: "is-warning"},
    {estado: "FINALIZADO", estilo: "is-info"},
    {estado: "CANCELADO", estilo: "is-danger"},
];

export const estados = [
    { value: 'EN ESPERA', label: 'En espera' },
    { value: 'EN PREPARACION', label: 'En preparación' },
    { value: 'FINALIZADO', label: 'Finalizado' },
    { value: 'ENTREGADO', label: 'Entregado' },
    { value: 'CANCELADO', label: 'Cancelado' },
];
