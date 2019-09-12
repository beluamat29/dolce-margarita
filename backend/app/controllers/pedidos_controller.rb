class PedidosController < ApplicationController

  def create
    #Crear pedido
    render json: { message: "Alto pedido wacho", datos: params }, status: :created

  end
end
