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

  def show_figuras
    render json: Producto.where(molde: "figura"), status: :ok
  end

  def show_bombones
    render json: Producto.where(molde: "bomboneria"), status: :ok
  end

  def show_huevos
    render json: Producto.where(molde: "huevo"), status: :ok
  end

  private

  def producto_params
    params.permit(:nombre, :precio, :peso_en_gramos, :descripcion, :molde)
  end
end
