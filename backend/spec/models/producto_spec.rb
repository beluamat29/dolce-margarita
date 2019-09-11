require 'rails_helper'

RSpec.describe Producto, type: :model do
  describe 'valid?' do
    context 'cuando no tiene un nombre asignado' do
      let(:producto) { Producto.build(nil, "Una descripñcion", 200.0) }

      it 'no es valido' do
        expect(producto.valid?).to be false
      end
    end
  end
end