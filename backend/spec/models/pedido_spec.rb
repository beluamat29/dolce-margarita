require 'rails_helper'

RSpec.describe Pedido, type: :model do
  let(:producto) do
    Producto.create(nombre: 'conejo rosa',
                    precio: 130,
                    peso_en_gramos: 200,
                    descripcion: 'conejito de chocolate')
  end
  let(:pedido) do
    Pedido.create(atributos)
  end
  context 'cuando tiene email del cliente, telefono del cliente, nombre del cliente, nombre del producto, cantidad, precio total y punto de retiro' do
    let(:atributos) do
      {
          producto: producto,
          email_cliente: 'belen.amat@gmail.com',
          telefono_cliente: 1159962745,
          nombre_cliente: 'Belen Amat',
          tipo_chocolate: 'blanco',
          cantidad: 3,
          precio_total: 300,
          lugar_retiro: 'Berazategui'
      }
    end
    it 'es valido' do
      expect(pedido).to be_valid
    end
  end

end

