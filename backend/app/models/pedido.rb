class Pedido < ActiveRecord::Base

  EN_ESPERA = 'EN ESPERA'
  ENTREGADO = 'ENTREGADO'
  FINALIZADO = 'FINALIZADO'
  EN_PREPARACION = 'EN PREPARACION'
  CANCELADO = 'CANCELADO'

  validates_presence_of :email_cliente, :nombre_cliente, :producto, :telefono_cliente, :tipo_chocolate, :lugar_retiro, :cantidad, :precio_total, :estado, :medio_de_pago
  validates :cantidad, numericality: { greater_than: 0 }
  validates :precio_total, numericality: { greater_than: 0 }

  belongs_to :producto
end
