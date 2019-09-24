class ProductoSerializer < ActiveModel::Serializer
  attributes  :id, :nombre, :peso_en_gramos, :precio, :molde, :descripcion
end
