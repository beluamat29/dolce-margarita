class ColumnaTamanioParaFigura < ActiveRecord::Migration
  def change
    add_column :productos, :tamanio, :integer
  end
end
