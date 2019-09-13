class CambiaTipoPrecioTotalEnPedido < ActiveRecord::Migration
  def change
    change_column :pedidos, :precio_total, :float
  end
end
