require 'rails_helper'

RSpec.describe ProductosController, type: :request do
  describe 'POST' do
    context 'cuando se recibe una figura' do
      let(:params) do
          {
             nombre: "Conejito",
             precio: 150,
             peso_en_gramos: 300,
             descripcion: "Conejito relleno de rocklets",
             molde: "figura"
          }
      end

      it 'agrega la figura a la lista de figuras' do
        expect { post '/productos', params}.to change(Producto, :count).by(+1)
        expect(response).to have_http_status :created
      end
    end
  end

end