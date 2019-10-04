require 'rails_helper'

RSpec.describe PedidosController, type: :request do
  describe '#create' do
    context 'cuando se reciben todos los parámetros requeridos' do
      before do
        Producto.create!(nombre: producto[:nombre], precio: producto[:precio], peso_en_gramos: producto[:peso_en_gramos], molde: producto[:molde], descripcion: producto[:descripcion])
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
        expect { post '/pedidos/crear', params }.to change(Pedido, :count).by(+1)
      end

      it 'tiene estado created' do
        post '/pedidos/crear', params

        expect(response).to have_http_status :created
      end

      it 'devuelve el pedido' do
        post '/pedidos/crear', params

        expect(JSON.parse(response.body)["pedido_parcial"]).to eq(params[:pedido_parcial])
        expect(JSON.parse(response.body)["nombre_cliente"]).to eq(params[:nombre_cliente])
        expect(JSON.parse(response.body)["email_cliente"]).to eq(params[:email_cliente])
        expect(JSON.parse(response.body)["telefono_cliente"]).to eq(params[:telefono_cliente])
        expect(JSON.parse(response.body)["lugar_retiro"]).to eq(params[:lugar_retiro])
      end
    end
  end
end
