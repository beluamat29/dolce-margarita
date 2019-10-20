class PedidosController < ApplicationController
  before_action :pedido_params, only: [:create]

  def create
    pedido_parcial = params[:pedido_parcial]
    producto = Producto.find_by(id: pedido_parcial[:producto][:id])
    @pedido = Pedido.create!(
        producto: producto,
        cantidad: pedido_parcial[:cantidad],
        tipo_chocolate: pedido_parcial[:tipo_chocolate],
        precio_total: pedido_parcial[:precio_total].to_f,
        nombre_cliente: params[:nombre_cliente],
        email_cliente: params[:email_cliente],
        telefono_cliente: params[:telefono_cliente],
        lugar_retiro: params[:lugar_retiro],
        estado: Pedido::EN_ESPERA,
    )

    render json: @pedido, status: :created, nothing: true
  end

  def modificar_estado
    @pedido = Pedido.find_by(id: params[:id])
    @pedido.update(estado: params[:estado])
    render json: @pedido, status: :ok, nothing: true
  end

  def index
    @pedidos = Pedido.all
    @renderred_pedidos = @pedidos.map do |pedido|
      producto_de_pedido = Producto.find_by(id: pedido.producto_id)
      pedido.as_json.merge!({'nombre_producto' => producto_de_pedido.nombre, 'peso_en_gramos' => producto_de_pedido.peso_en_gramos})
    end

    render json: @renderred_pedidos, status: :ok, nothing: true
  end

  private

  def pedido_params
    begin
      params.require(:pedido_parcial)
      params.require(:nombre_cliente)
      params.require(:email_cliente)
      params.require(:telefono_cliente)
      params.require(:lugar_retiro)


      params.permit(:pedido_parcial, :nombre_cliente, :email_cliente, :telefono_cliente, :lugar_retiro)
    rescue
      render status: :bad_request, nothing: true
    end
  end
end
