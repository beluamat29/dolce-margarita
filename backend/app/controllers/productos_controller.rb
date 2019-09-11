class ProductosController < ApplicationController
  protect_from_forgery with: :null_session

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
    render json: FIGURAS, status: :ok
  end

  def show_bombones
    render json: BOMBONES, status: :ok
  end

  def show_huevos
    render json: HUEVOS, status: :ok
  end

  def create
    #Crear pedido
    render json: { message: "Alto pedido wacho", datos: params }, status: :created

  end
end
