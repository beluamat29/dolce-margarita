require 'rails_helper'

RSpec.describe Figura, type: :model do
  describe 'valid?' do

    context 'cuando no tiene un nombre asignado' do
      let(:producto_figura) { FactoryBot.create(:figura, :sin_nombre) }

      it 'no es valido' do
        expect(producto_figura.valid?).to be false
      end
    end
  end
end