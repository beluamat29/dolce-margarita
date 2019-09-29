require 'rails_helper'

def usuario_se_creo_con_contrasenia(contrasenia)
  User.find(JSON.parse(response.body)["id"]).valid_password?(contrasenia)
end

RSpec.describe UserController, type: :request do
  describe 'POST' do
    context 'cuando se recibe un nombre, un apellido, un email y una contrasea' do
      let(:params) do
        {
            nombre: "Maria Belen",
            apellido: "Amat",
            email: "belen@gmail.com",
            password: "ABC123"
        }
      end

      it 'agrega el usuario con los parametros dados' do
        expect {post '/usuarios', params}.to change(User, :count).by(+1)
        expect(response).to have_http_status :created

        expect(JSON.parse(response.body)["nombre"]).to eq(params[:nombre])
        expect(JSON.parse(response.body)["apellido"]).to eq(params[:apellido])
        expect(JSON.parse(response.body)["email"]).to eq(params[:email])
        expect(usuario_se_creo_con_contrasenia(params[:password])).to be_truthy
      end
    end
  end
end
