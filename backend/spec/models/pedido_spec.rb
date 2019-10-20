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
    it 'es valido y tiene estado EN ESPERA' do
      expect(pedido).to be_valid
      expect(pedido.estado).to eq(Pedido::EN_ESPERA)
    end
  end

  context 'un pedido con una cantidad de productos negativa' do
    let(:atributos) do
      {
          producto: producto,
          email_cliente: 'belen.amat@gmail.com',
          telefono_cliente: 1159962745,
          nombre_cliente: 'Belen Amat',
          tipo_chocolate: 'blanco',
          cantidad: -3,
          precio_total: 300,
          lugar_retiro: 'Berazategui'
      }
    end
    it 'no es valido' do
      expect(pedido).not_to be_valid
    end
  end

  context 'un pedido con un precio total negativo' do
    let(:atributos) do
      {
          producto: producto,
          email_cliente: 'belen.amat@gmail.com',
          telefono_cliente: 1159962745,
          nombre_cliente: 'Belen Amat',
          tipo_chocolate: 'blanco',
          cantidad: 3,
          precio_total: -300,
          lugar_retiro: 'Berazategui'
      }
    end
    it 'no es valido' do
      expect(pedido).not_to be_valid
    end
  end
end


