class ProductosController < ApplicationController
  before_action :producto_params
  #protect_from_forgery with: :null_session

  def agregar_producto
    if es_figura_o_bomboneria
      @producto = Producto.agregar_figura(params)
    else
      @producto = Producto.agregar_huevo(params)
    end

    render json: @producto, status: :created, nothing: true
  end

  def es_figura_o_bomboneria
    (params[:molde].eql? 'figura') || (params[:molde].eql? 'bomboneria')
  end

=begin
  HUEVOS = [
      {
          nombre: "Gallina rellena",
          descripcion: "Figura rellena de gomitas y confites de colores!",
          peso: 250,
          precio: 90
      },
      {
          nombre: "Gallina rellena",
          descripcion: "Figura rellena de gomitas y confites de colores!",
          peso: 250,
          precio: 670
      },
      {
          nombre: "Gallina rellena",
          descripcion: "Figura rellena de gomitas y confites de colores!",
          peso: 250,
          precio: 670
      }
  ].freeze
=end

  def show_figuras
    render json: Producto.where(molde: "figura"), status: :ok
  end

  def show_bombones
    render json: Producto.where(molde: "bomboneria"), status: :ok
  end

  def show_huevos
    render json: HUEVOS, status: :ok
  end

  private

  def producto_params
      params.permit(:nombre, :precio, :peso_en_gramos, :descripcion, :molde)
  end
end
