class Pedido < ActiveRecord::Base
  validates_presence_of :email_cliente, :nombre_cliente, :producto, :telefono_cliente, :tipo_chocolate, :lugar_retiro, :cantidad, :precio_total
  has_one :producto
end
