class Pedido < ActiveRecord::Base

  EN_ESPERA = 'EN ESPERA'
  validates_presence_of :email_cliente, :nombre_cliente, :producto, :telefono_cliente, :tipo_chocolate, :lugar_retiro, :cantidad, :precio_total
  validates :cantidad, numericality: { greater_than: 0 }
  validates :precio_total, numericality: { greater_than: 0 }

  belongs_to :producto
end
