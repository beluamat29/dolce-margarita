require 'rails_helper'

RSpec.describe UserController, type: :request do
  describe 'POST' do
    context 'cuando se recibe un nombre, un apellido, un email y una contraseña' do
      let(:params) do
        {
            nombre: "Maria Belen",
            apellido: "Amat",
            email: "belen@gmail.com",
            encrypted_password: "ABC123"
        }
      end

      it 'agrega la figura a la lista de figuras, tiene estado created y devuelve la figura creada' do
        expect { post '/usuarios', params}.to change(User, :count).by(+1)
        expect(response).to have_http_status :created
        expect(JSON.parse(response.body)["nombre"]).to eq(params[:nombre])
        expect(JSON.parse(response.body)["apellido"]).to eq(params[:apellido])
        expect(JSON.parse(response.body)["email"]).to eq(params[:email])
        expect(JSON.parse(response.body)["password"]).to eq(params[:password])
      end
    end
  end
end
