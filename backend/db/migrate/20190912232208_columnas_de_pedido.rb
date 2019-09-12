class ColumnasDePedido < ActiveRecord::Migration
  def change
    add_column :pedidos, :email_cliente, :string
    add_column :pedidos, :telefono_cliente, :string
    add_column :pedidos, :nombre_cliente, :string
    add_column :pedidos, :tipo_chocolate, :string
    add_column :pedidos, :cantidad, :integer
    add_column :pedidos, :lugar_retiro, :string
    add_column :pedidos, :precio_total , :integer
    add_reference :pedidos, :producto
  end
end
