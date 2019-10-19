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
            lugar_retiro: "Calle Falsa 123"
        }
      end

      it 'agrega el pedido creado, tiene' do
        expect { post_crear }.to change(Pedido, :count).by(+1)
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
end
