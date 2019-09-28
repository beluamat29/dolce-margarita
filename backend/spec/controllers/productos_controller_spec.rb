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
        expect(JSON.parse(response.body)["nombre"]).to eq(params[:nombre])
        expect(JSON.parse(response.body)["precio"]).to eq(params[:precio])
        expect(JSON.parse(response.body)["peso_en_gramos"]).to eq(params[:peso_en_gramos])
        expect(JSON.parse(response.body)["descripcion"]).to eq(params[:descripcion])
        expect(JSON.parse(response.body)["molde"]).to eq(params[:molde])
      end
    end
  end

end