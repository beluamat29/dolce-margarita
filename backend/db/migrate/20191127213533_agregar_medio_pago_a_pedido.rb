class AgregarMedioPagoAPedido < ActiveRecord::Migration
  def change
    add_column :pedidos, :medio_de_pago, :string
    add_column :pedidos, :pagado, :boolean
  end
end
