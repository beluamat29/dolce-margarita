import React from "react";
import servicio from "../../servicios/servicio";

const confirmarPedido = () => {
  return servicio.confirmarPedido(
    JSON.parse(localStorage.getItem('pedido')),
    JSON.parse(localStorage.getItem('nombreClienteDelPedido')),
    JSON.parse(localStorage.getItem('emailClientePedido')),
    JSON.parse(localStorage.getItem('telefonoClientePedido')),
    JSON.parse(localStorage.getItem('puntoDeRetiro')),
    JSON.parse(localStorage.getItem('medioPago')),
    false)
    .then(response => alert("Tu pedido se ha realizado con exito!"))
}

export const PedidoCreadoExito = () => {
  confirmarPedido()
  return (
    <div>
      Se creo tu pedido!!!
    </div>
  )
}
