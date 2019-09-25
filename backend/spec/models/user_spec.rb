require 'rails_helper'

RSpec.describe User, type: :model do
  let(:usuario) do
    User.create(atributos)
  end

  context 'cuando tiene nombre, apellido y email' do
    let(:atributos) do
      {
          nombre: 'Maria Belen',
          apellido: 'Amat',
          email: 'belen@gmail.com',
          password: '123456'
      }
    end
    it 'es valido' do
      expect(usuario).to be_valid
    end
  end

  context 'cuando no tiene nombre' do
    let(:atributos) do
      {
          apellido: 'Amat',
          email: 'belen@gmail.com',
          password: '123456'
      }
    end
    it 'no es valido' do
      expect(usuario).not_to be_valid
    end
  end

  context 'cuando no tiene apellido' do
    let(:atributos) do
      {
          nombre: 'Maria Belen',
          email: 'belen@gmail.com',
          password: '123456'
      }
    end
    it 'no es valido' do
      expect(usuario).not_to be_valid
    end
  end

  context 'cuando no tiene mail' do
    let(:atributos) do
      {
          nombre: 'Maria Belen',
          apellido: 'Amat',
          password: '123456'
      }
    end
    it 'no es valido' do
      expect(usuario).not_to be_valid
    end
  end

  context 'cuando no tiene password' do
    let(:atributos) do
      {
          nombre: 'Maria Belen',
          apellido: 'Amat',
          email: 'belen@gmail.com'
      }
    end
    it 'no es valido' do
      expect(usuario).not_to be_valid
    end
  end

  context 'Un usuario puede recibir un booleano en su creacion' do
    let(:atributos) do
      {
          nombre: 'Maria Belen',
          apellido: 'Amat',
          email: 'belen@gmail.com',
          admin: true
      }
    end

    it 'y ser admin' do
      expect(usuario.es_admin)
    end
  end
end
