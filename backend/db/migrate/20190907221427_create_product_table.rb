class CreateProductTable < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :nombre, null: false
      t.string :descripcion, null: false
      t.float :precio, null: false
      t.integer :tamaño
      t.integer :peso
      t.string :type
      t.boolean :con_pared_rellena

      t.timestamps
    end
  end
end
