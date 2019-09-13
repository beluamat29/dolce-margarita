class PedidosController < ApplicationController

  def create
    pedido_parcial = params[:pedido_parcial]
    producto = Producto.find_by(id: pedido_parcial.producto.id)
    pedido = Pedido.create!(
        producto: producto,
        cantidad: pedido_parcial.cantidad,
        tipo_chocolate: pedido_parcial.tipo_chocolate,
        precio_total: pedido_parcial.precio_total,
        nombre_cliente: params[:nombre_cliente],
        email_cliente: params[:email_cliente],
        telefono_cliente: params[:telefono_cliente],
        lugar_retiro: params[:lugar_retiro]
    )
    render json: { message: pedido, datos: params }, status: :created
  end
end
