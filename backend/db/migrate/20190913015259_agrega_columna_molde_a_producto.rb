class AgregaColumnaMoldeAProducto < ActiveRecord::Migration
  def change
    add_column :productos, :molde, :string
  end
end
