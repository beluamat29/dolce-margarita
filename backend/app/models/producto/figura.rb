class Figura < Producto
  validates :peso, presence: true

  def initialize(nombre, descripcion, precio, imagen=nil, peso)
    super(nombre, descripcion, precio, imagen)
    @peso = peso
  end
end