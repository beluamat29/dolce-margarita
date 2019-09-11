class Producto < ActiveRecord::Base
  validates :nombre, :precio, :descripcion, presence: true

  def initialize(nombre, descripcion, precio, imagen=nil)
    @nombre = nombre
    @descripcion = descripcion
    @precio = precio
    @imagen = imagen
  end
end
