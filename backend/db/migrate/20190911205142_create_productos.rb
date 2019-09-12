class CreateProductos < ActiveRecord::Migration
  def change
    create_table :productos do |t|
      t.timestamps null: false
      t.belongs_to :pedido
    end
  end
end
