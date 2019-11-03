class ProductosController < ApplicationController
  before_action :producto_params, only: [:agregar_producto]
  #protect_from_forgery with: :null_session

  def agregar_producto
    @producto = Producto.agregar_producto(params)
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

  def nombres
    @productos = Producto.all
    @productos.map do |producto|
      producto[:nombre]
    end
    render json: @productos, status: :ok, nothing: true
  end

  def eliminar_producto
    @producto = Producto.destroy(params[:id])
    render status: :ok, nothing: :true
  end

  private

  def producto_params
    begin
      params.require(:nombre)
      params.require(:precio)
      params.require(:peso_en_gramos)
      params.require(:descripcion)
      params.require(:molde)


      params.permit(:nombre, :precio, :peso_en_gramos, :descripcion, :molde, :imagen)
    rescue
      render status: :bad_request, nothing: true
    end  end
end
