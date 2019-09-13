class CreatePedidos < ActiveRecord::Migration
  def change
    create_table :pedidos do |t|

      t.timestamps null: false
      t.belongs_to :producto
    end
  end
end
