class AgregoEstadoAlPedido < ActiveRecord::Migration
  def change
    add_column :pedidos, :estado, :string, :default => Pedido::EN_ESPERA
  end
end
