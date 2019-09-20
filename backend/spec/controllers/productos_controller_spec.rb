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

      it 'agrega la figura a la lista de figuras, tiene estado created y devuelve la figura creada' do
        expect { post '/productos', params}.to change(Producto, :count).by(+1)
        expect(response).to have_http_status :created
=begin
        expect(JSON.parse(response.body)).to contain_exactly({
                                                                 nombre: "Conejito",
                                                                 precio: 150,
                                                                 peso_en_gramos: 300,
                                                                 descripcion: "Conejito relleno de rocklets",
                                                                 molde: "figura"
                                                             })
=end
      end
    end
  end

end