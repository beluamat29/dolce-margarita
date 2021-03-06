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

      it 'agrega el usuario con los parametros dados, devuelve CREATED y el usuario no es admin' do
        expect {post '/usuarios', params}.to change(User, :count).by(+1)
        expect(response).to have_http_status :created

        expect(JSON.parse(response.body)["nombre"]).to eq(params[:nombre])
        expect(JSON.parse(response.body)["apellido"]).to eq(params[:apellido])
        expect(JSON.parse(response.body)["email"]).to eq(params[:email])
        expect(JSON.parse(response.body)["admin"]).to be_falsey

        expect(usuario_se_creo_con_contrasenia(params[:password])).to be_truthy
      end
    end

    context 'si se recibe el parametro admin en true' do
      let(:params) do
        {
            nombre: "Maria Belen",
            apellido: "Amat",
            email: "belen@gmail.com",
            password: "ABC123",
            admin: true
        }
      end


      it 'entonces el usuario creado es admin' do
        expect {post '/usuarios', params}.to change(User, :count).by(+1)
        expect(response).to have_http_status :created
        expect(JSON.parse(response.body)["admin"]).to be_truthy
      end
    end

    context 'si no se recibe alguno de los parametros necesarios' do
      let(:params) do
        {
            nombre: "Maria Belen",
            apellido: "Amat",
            password: "ABC123"
        }
      end

      it 'el estado de la respuesta es bad request' do
        post '/usuarios', params
        expect(response).to have_http_status :bad_request
      end
    end
  end

  context 'Cuando existe un usuario admin' do
     User.create!(nombre: "Maria Belen",
                apellido: "Amat",
                email: "belenadmin@gmail.com",
                password: "ABC123",
                admin: true)


    context 'y paso el email y la contrasenia  correcta' do
      let(:params) do
        {
            email: "belenadmin@gmail.com",
            password: "ABC123"
        }
      end
      it 'puedo obtenerlo' do
        post '/admin', params
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body)["email"]).to eq("belenadmin@gmail.com")
      end
    end

     context 'y paso el email y la contrasenia  incorrecta' do
       let(:params) do
         {
             email: "belenadmin@gmail.com",
             password: "contraseniaincorrecta"
         }
       end
       it 'no puedo obtenerlo' do
         post '/admin', params
         expect(response).to have_http_status :unauthorized
       end
     end
  end
end