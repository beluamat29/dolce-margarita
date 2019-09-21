class ProductosController < ApplicationController
  protect_from_forgery with: :null_session

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

  def show_figuras
    render json: Producto.where(molde: "figura"), status: :ok
  end

  def show_bombones
    render json: Producto.where(molde: "bomboneria"), status: :ok
  end

  def show_huevos
    render json: HUEVOS, status: :ok
  end
end
