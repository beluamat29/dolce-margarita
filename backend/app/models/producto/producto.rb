class Producto < ActiveRecord
  validates :nombre, :precio, :descripcion, presence: true

  def initialize(nombre, descripcion, precio, imagen)
    @nombre = nombre
    @descripcion = descripcion
    @precio = precio
    @imagen = imagen
  end
end
