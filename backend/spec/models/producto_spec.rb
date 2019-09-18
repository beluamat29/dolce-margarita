require 'rails_helper'

RSpec.describe Producto, type: :model do
  let(:producto) do
    Producto.create(atributos)
  end
  context 'cuando tiene nombre, precio, molde, peso en gramos y descripcion' do
    let(:atributos) do
      {
          nombre: 'conejo rosa',
          precio: 130,
          peso_en_gramos: 200,
          descripcion: 'conejito de chocolate',
          molde: 'figura'
      }
    end
    it 'es valido' do
      expect(producto).to be_valid
    end
  end

  context 'cuando no tiene nombre' do
    let(:atributos) do
      {
          precio: 130,
          peso_en_gramos: 200,
          descripcion: 'conejito de chocolate',
          molde: 'figura'
      }
    end
    it 'no es valido' do
      expect(producto).not_to be_valid
    end
  end

  context 'cuando no tiene precio' do
    let(:atributos) do
      {
          nombre: 'conejo rosa',
          peso_en_gramos: 200,
          descripcion: 'conejito de chocolate',
          molde: 'figura'
      }
    end
    it 'no es valido' do
      expect(producto).not_to be_valid
    end
  end

  context 'cuando no tiene peso en gramos' do
    let(:atributos) do
      {
          nombre: 'conejo rosa',
          precio: 130,
          descripcion: 'conejito de chocolate',
          molde: 'figura'
      }
    end
    it 'no es valido' do
      expect(producto).not_to be_valid
    end
  end

  context 'cuando no tiene descripcion' do
    let(:atributos) do
      {
          nombre: 'conejo rosa',
          precio: 130,
          peso_en_gramos: 200,
          molde: 'figura'
      }
    end
    it 'no es valido' do
      expect(producto).not_to be_valid
    end
  end

  context 'cuando no tiene molde' do
    let(:atributos) do
      {
          nombre: 'conejo rosa',
          precio: 130,
          peso_en_gramos: 200,
          descripcion: 'conejito de chocolate'
      }
    end
    it 'no es valido' do
      expect(producto).not_to be_valid
    end
  end
end


