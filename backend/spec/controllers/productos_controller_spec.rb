require 'rails_helper'

RSpec.describe ProductosController, type: :request do

  def response_tiene_los_campos_correctos(params, response)
    cuerpo_de_respuesta = JSON.parse(response.body)
    params.each do |param|
      expect(cuerpo_de_respuesta[param[0].to_s]).to eq params[param[0]]
    end
  end

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
        expect {post '/productos', params}.to change(Producto, :count).by(+1)
        expect(response).to have_http_status :created
        response_tiene_los_campos_correctos(params, response)
      end
    end

    context 'cuando se recibe bomboneria' do
      let(:params) do
        {
            nombre: "Caja de bombones x 500gr",
            precio: 700,
            peso_en_gramos: 500,
            descripcion: "Caja de bombones",
            molde: "bomboneria"
        }
      end

      it 'agrega los bombones a la lista de figuras, tiene estado created y devuelve los bombones creados' do
        expect {post '/productos', params}.to change(Producto, :count).by(+1)
        expect(response).to have_http_status :created
        response_tiene_los_campos_correctos(params, response)
      end
    end

    context 'cuando se recibe un huevo' do
      let(:params) do
        {
            nombre: "Huevo",
            precio: 700,
            peso_en_gramos: 500,
            descripcion: "Huevo relleno",
            molde: "huevo",
            tamanio: 14
        }
      end

      it 'agrega el huevo a la lista de productos, tiene estado created y devuelve el huevo creado' do
        expect {post '/productos', params}.to change(Producto, :count).by(+1)
        expect(response).to have_http_status :created
        response_tiene_los_campos_correctos(params, response)
      end
    end

    context 'cuando no se recibe un nombre de producto' do
      let(:params) {
        {
            precio: 700,
            peso_en_gramos: 500,
            descripcion: "Huevo relleno",
            molde: "huevo",
            tamanio: 14
        }}

      it 'el estado de la respuesta es bad request' do
        post '/productos', params
        expect(response).to have_http_status :bad_request
      end
    end

    context 'cuando no se recibe un precio de producto' do
      let(:params) {
        {
            nombre: "Un producto",
            peso_en_gramos: 500,
            descripcion: "Huevo relleno",
            molde: "huevo",
            tamanio: 14
        }}

      it 'el estado de la respuesta es bad request' do
        post '/productos', params
        expect(response).to have_http_status :bad_request
      end
    end

    context 'cuando no se recibe un peso en gramos del producto' do
      let(:params) {
        {
            nombre: "Un producto",
            precio: 700,
            descripcion: "Huevo relleno",
            molde: "huevo",
            tamanio: 14
        }}

      it 'el estado de la respuesta es bad request' do
        post '/productos', params
        expect(response).to have_http_status :bad_request
      end
    end

    context 'cuando no se recibe una descripcion del producto' do
      let(:params) {
        {
            nombre: "Un producto",
            precio: 700,
            peso_en_gramos: 400,
            molde: "figura"
        }}

      it 'el estado de la respuesta es bad request' do
        post '/productos', params
        expect(response).to have_http_status :bad_request
      end
    end

    context 'cuando no se recibe el molde del producto' do
      let(:params) {
        {
            nombre: "Un producto",
            precio: 700,
            peso_en_gramos: 400,
            descripcion: "Conejo"
        }}

      it 'el estado de la respuesta es bad request' do
        post '/productos', params
        expect(response).to have_http_status :bad_request
      end
    end
  end
end
