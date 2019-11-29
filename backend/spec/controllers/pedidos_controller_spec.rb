require 'rails_helper'

RSpec.describe PedidosController, type: :request do

  def response_tiene_los_campos_correctos(response)
    cuerpo_de_respuesta = JSON.parse(response.body)
    expected_attrs.each do |attr|
      expect(cuerpo_de_respuesta[attr[0].to_s]).to eq expected_attrs[attr[0]]
    end
  end

  def expected_attrs
    {
        nombre_cliente: "Micaela Alonso",
        email_cliente: "mica@gmail.com",
        telefono_cliente: "12345678",
        lugar_retiro: "Calle Falsa 123"
    }
  end

  describe '#create' do
    let(:post_crear) do
      post '/pedidos/crear', params
    end
    let(:producto) do
      {
          id: 1,
          nombre: "Conejito",
          precio: 150,
          peso_en_gramos: 300,
          descripcion: "Conejito relleno de rocklets",
          molde: "figura"
      }
    end
    let(:pedido_parcial) do
      {
          producto: producto,
          cantidad: 1,
          tipo_chocolate: "chocolate blanco",
          precio_total: 200.0
      }
    end

    context 'cuando se reciben todos los parámetros requeridos' do
      before do
        Producto.create!(nombre: producto[:nombre], precio: producto[:precio], peso_en_gramos: producto[:peso_en_gramos], molde: producto[:molde], descripcion: producto[:descripcion])
      end

      let(:params) do
        {
            pedido_parcial: pedido_parcial,
            nombre_cliente: "Micaela Alonso",
            email_cliente: "mica@gmail.com",
            telefono_cliente: "12345678",
            lugar_retiro: "Calle Falsa 123",
            medio_de_pago: "efectivo",
            pagado: false
        }
      end

      it 'agrega el pedido creado, tiene' do
        expect {post_crear}.to change(Pedido, :count).by(+1)
      end

      it 'tiene estado created y devuelve el pedido' do
        post_crear

        expect(response).to have_http_status :created
        response_tiene_los_campos_correctos(response)
        expect(JSON.parse(response.body)['producto_id']).to eq(producto[:id])
        expect(JSON.parse(response.body)['estado']).to eq(Pedido::EN_ESPERA)
      end
    end

    context 'cuando no se recibe algún parametro requerido' do
      let(:params) do
        {
            nombre_cliente: "Micaela Alonso",
            email_cliente: "mica@gmail.com",
            telefono_cliente: "12345678",
            lugar_retiro: "Calle Falsa 123"
        }
      end

      it 'el estado de la respuesta es bad request' do
        post_crear

        expect(response).to have_http_status :bad_request
      end
    end
  end

  describe '#modificar_estado' do
    context 'cuando existe un pedido' do
      let(:producto) {Producto.create!(nombre: 'Conejito', precio: 150.0, peso_en_gramos: 230, molde: 'figura', descripcion: 'paleta conejo')}
      let(:pedido) {Pedido.create!(
          producto: producto,
          cantidad: 2,
          tipo_chocolate: 'Blanco',
          precio_total: 300.0,
          nombre_cliente: 'Belen Amat',
          email_cliente: 'belu@gmail.com',
          telefono_cliente: '1159963746',
          lugar_retiro: 'Pedriel 74 - CABA',
          medio_de_pago: 'tarjeta',
          pagado: true
      )}


      let(:params) do
        {
            id: pedido.id,
            estado: Pedido::EN_PREPARACION
        }

      end
      it 'se puede modificar su estado' do
        put '/estadoPedidos', params
        expect(response).to have_http_status :ok
        expect(Pedido.find_by(id: params[:id]).estado).to eq(Pedido::EN_PREPARACION)
        expect(JSON.parse(response.body)['estado']).to eq(Pedido::EN_PREPARACION)
      end
    end
  end

  describe '#pedidos_a_relizar' do

    let(:params) do
      {
          nombre: 'Conejito',
          tipo_chocolate: 'blanco'
      }
    end

    context 'cuando no hay pedidos' do
      it 'devuelve una lista vacia' do
        get '/pedidosARealizar', params
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body)).to eq([])
      end
    end

    context 'cuando hay pedidos' do
      let(:producto_1) {Producto.create!(nombre: 'Conejito', precio: 150.0, peso_en_gramos: 230, molde: 'figura', descripcion: 'paleta conejo')}
      let(:pedido_1) {Pedido.create!(
          producto: producto_1,
          cantidad: 2,
          tipo_chocolate: 'blanco',
          precio_total: 300.0,
          nombre_cliente: 'Belen Amat',
          email_cliente: 'belu@gmail.com',
          telefono_cliente: '1159963746',
          lugar_retiro: 'Pedriel 74 - CABA',
          medio_de_pago: 'tarjeta',
          pagado: true
      )}

      let(:pedido_2) {Pedido.create!(
          producto: producto_1,
          cantidad: 3,
          tipo_chocolate: 'semi amargo',
          precio_total: 300.0,
          nombre_cliente: 'Belen Amat',
          email_cliente: 'belu@gmail.com',
          telefono_cliente: '1159963746',
          lugar_retiro: 'Pedriel 74 - CABA',
          medio_de_pago: 'efectivo',
          pagado: false
      )}

      context 'y se busca por un nombre y tipo de chocolate' do
        before do
          pedido_1
          pedido_2
        end
        it 'se obtiene la lista de pedidos cuyo producto tiene ese nombre y tipo de chocolate' do
          get '/pedidosARealizar', params
          expect(response).to have_http_status :ok
          expect(JSON.parse(response.body).length).to eq(1)
          expect(JSON.parse(response.body)[0]['id']).to eq(pedido_1.id)
        end
      end
    end
  end
end
