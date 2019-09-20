class ProductosController < ApplicationController
  before_action :producto_params
  #protect_from_forgery with: :null_session

  def agregar_producto
    if es_figura_o_bomboneria
      Producto.agregar_figura(params)
    end

    #TODO: AGREGAR EL PRODUCTO CREADO AL BODY DE LA RESPONSE
    render status: :created, nothing: true
  end

  def es_figura_o_bomboneria
    params[:molde].eql? 'figura' || (params[:molde].eql? 'bomboneria')
  end

  FIGURAS = [
      {
          nombre: "Chupetin de conejo",
          descripcion: "Figura rellena de gomitas y confites de colores!",
          peso: 90,
          precio: 432
      },
      {
          nombre: "Chupetin de conejo",
          descripcion: "Figura rellena de gomitas y confites de colores!",
          peso: 500,
          precio: 100
      },
      {
          nombre: "Chupetin de conejo",
          descripcion: "Figura rellena de gomitas y confites de colores!",
          peso: 90,
          precio: 130
      }
  ].freeze

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

  BOMBONES = [
      {
          nombre: "Balde de huevitos",
          descripcion: "Balde colorido lleno de pequeños huevos",
          peso: 300,
          precio: 90
      },
      {
          nombre: "Balde de huevitos",
          descripcion: "Balde colorido lleno de pequeños huevos",
          peso: 300,
          precio: 230
      },
      {
          nombre: "Balde de huevitos",
          descripcion: "Balde colorido lleno de pequeños huevos",
          peso: 300,
          precio: 190
      }
  ].freeze

  def show_figuras
    render json: Producto.where(molde: "figura"), status: :ok
  end

  def show_bombones
    render json: BOMBONES, status: :ok
  end

  def show_huevos
    render json: HUEVOS, status: :ok
  end

  private
  def producto_params
    params.permit(:nombre, :precio, :peso_en_gramos, :descripcion, :molde)
  end
end
