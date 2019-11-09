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
        expect { post '/productos', params }.to change(Producto, :count).by(+1)
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
        expect { post '/productos', params }.to change(Producto, :count).by(+1)
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
        expect { post '/productos', params }.to change(Producto, :count).by(+1)
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
        } }

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
        } }

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
        } }

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
        } }

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
        } }

      it 'el estado de la respuesta es bad request' do
        post '/productos', params
        expect(response).to have_http_status :bad_request
      end
    end
  end

  describe '#nombres' do
    context 'cuando no hay productos' do
      it 'devuelve una lista vacia' do
        get '/productos/nombres'
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body)).to eq([])
      end
    end

    context 'cuando hay productos' do
      before do
        Producto.create!(nombre: 'Conejito', precio: 150.0, peso_en_gramos: 230, molde: 'figura', descripcion: 'paleta conejo')
        Producto.create!(nombre: 'Gallina', precio: 150.0, peso_en_gramos: 230, molde: 'figura', descripcion: 'paleta gallina')
      end

      it 'retorna la lista de los nombres de los productos' do
        get '/productos/nombres'
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body).length).to eq(2)
        expect(JSON.parse(response.body)[0]['nombre']).to eq('Conejito')
        expect(JSON.parse(response.body)[1]['nombre']).to eq('Gallina')
      end
    end
  end


  describe '#eliminar_producto' do


    context 'cuando el producto no existe' do
      let(:producto_id) {SecureRandom.uuid}
      it 'retorna not found' do
        delete "/productos/#{producto_id}"
        expect(response).to have_http_status :not_found
      end
    end

    context 'cuando el producto existe' do
      let(:producto) do
        Producto.create!(nombre: 'Gallina', precio: 150.0, peso_en_gramos: 230, molde: 'figura', descripcion: 'paleta gallina')
      end

      it 'se elimina el producto y retorna ok' do
        delete "/productos/#{producto.id}"
        expect(Producto.find(producto.id).activo).to be_falsey
        expect(response).to have_http_status :ok
      end
    end
  end

  describe '#editar_producto' do
    context 'cuando el producto no existe' do
      let(:params) do
        {
            id: 34,
            precio: 450
        }
      end

      it 'el estado de la respuesta es not found' do
        put '/productos/editar_producto', params
        expect(response).to have_http_status :not_found
      end
    end

    context 'cuando el producto existe' do
      let(:producto) { Producto.create!(nombre: 'Conejito', precio: 150.0, peso_en_gramos: 230, molde: 'figura', descripcion: 'paleta conejo') }
      let(:params) do
        {
            id: producto.id,
            precio: 450,
            peso_en_gramos: 532,
            descripcion: 'una nueva descripcion'
        }
      end

      it 'actualiza los campos del producto y devuelve el producto actualizado y un estado ok' do
        put '/productos/editar_producto', params
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body)['id']).to eq producto.id
        expect(JSON.parse(response.body)['precio']).to eq params[:precio]
        expect(JSON.parse(response.body)['peso_en_gramos']).to eq params[:peso_en_gramos]
        expect(JSON.parse(response.body)['descripcion']).to eq params[:descripcion]
      end
    end
  end
end