class Producto < ActiveRecord::Base
  validates_presence_of :nombre, :precio, :peso_en_gramos, :descripcion
  belongs_to :pedido
end
