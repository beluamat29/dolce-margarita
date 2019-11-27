require 'mercadopago.rb'

class PedidosController < ApplicationController
  before_action :pedido_params, only: [:create]

  def pagar
    # Agrega credenciales
    $mp = MercadoPago.new('TEST-2872476240587920-110820-05f82c909be025c282ace8c337dcfa22-77626432')

    pedido_parcial = params[:pedido_parcial]
    producto = Producto.find_by(id: pedido_parcial[:producto][:id])

    # Crea un objeto de preferencia
    preference_data = {
        "items": [
            {
                "title": producto.nombre,
                "unit_price": producto.precio,
                "quantity": pedido_parcial[:cantidad],
                "currency_id": "ARS"
            }
        ],
        "back_urls": {
            success: "http://localhost:3001/confirmacion",
            failure: "http://localhost:3001/confirmacion",
            pending: "http://localhost:3001/confirmacion"
        },
        "auto_return": "all"
    }
    preference = $mp.create_preference(preference_data)

    @init_point = preference["response"]["sandbox_init_point"]

    render json: @init_point, status: :created, nothing: true
  end

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
        medio_de_pago: params[:medio_de_pago],
        pagado: params[:pagado]
    )

    render json: @pedido, status: :created, nothing: true
  end

  def modificar_estado
    @pedido = Pedido.find_by(id: params[:id])
    @pedido.update(estado: params[:estado])
    render json: @pedido, status: :ok, nothing: true
  end

  def index
    @pedidos =  Pedido.where(estado: [Pedido::EN_ESPERA, Pedido::EN_PREPARACION])
    @renderred_pedidos = @pedidos.map do |pedido|
      producto_de_pedido = Producto.find_by(id: pedido.producto_id)
      pedido.as_json.merge!({'nombre_producto' => producto_de_pedido.nombre, 'peso_en_gramos' => producto_de_pedido.peso_en_gramos})
    end

    render json: @renderred_pedidos, status: :ok, nothing: true
  end

  def filtrar_por_estado
    render json: pedido_to_json(Pedido.where(estado: params[:estado])), status: :ok, nothing: true
  end

  def pedidos_a_realizar
    @pedidos_a_realizar = Pedido.joins(:producto).where(productos: {nombre: params[:nombre]})
                              .where(tipo_chocolate: params[:tipo_chocolate], estado: Pedido::EN_ESPERA)
    render json: @pedidos_a_realizar, status: :ok, nothing: true
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

  def pedido_to_json(pedidos)
    pedidos.map do |pedido|
      producto_de_pedido = Producto.find_by(id: pedido.producto_id)
      pedido.as_json.merge!({'nombre_producto' => producto_de_pedido.nombre, 'peso_en_gramos' => producto_de_pedido.peso_en_gramos})
    end
  end
end
