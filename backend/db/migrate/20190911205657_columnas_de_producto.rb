class ColumnasDeProducto < ActiveRecord::Migration
  def change
    add_column :productos, :nombre, :string
    add_column :productos, :precio, :integer
    add_column :productos, :peso_en_gramos, :integer
    add_column :productos, :descripcion, :text
  end
end
