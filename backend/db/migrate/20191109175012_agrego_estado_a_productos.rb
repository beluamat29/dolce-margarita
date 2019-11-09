class AgregoEstadoAProductos < ActiveRecord::Migration
  def change
    add_column :productos, :activo, :boolean, :default => true
  end
end
