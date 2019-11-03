Rails.application.routes.draw do

  devise_for :users
  #Productos
  post '/productos', to: 'productos#agregar_producto'

  put '/productos/editar_producto', to: 'productos#editar_producto'

  get '/productos/nombres', to: 'productos#nombres'

  get '/productos/figuras', to: 'productos#show_figuras'

  get '/productos/bombones', to: 'productos#show_bombones'

  get '/productos/huevos', to: 'productos#show_huevos'

  delete 'productos/:id', to: 'productos#eliminar_producto'

  #Pedidos
  get 'pedidos', to: 'pedidos#index'
  get 'pedidosARealizar', to: 'pedidos#pedidos_a_realizar'
  post '/pedidos/crear', to: 'pedidos#create'
  put '/estadoPedidos', to: 'pedidos#modificar_estado'
  post '/pedidos/pagar', to: 'pedidos#pagar'

  #Usuarios
  post '/usuarios', to: 'user#agregar_usuario'

  post '/admin', to: 'user#validar_usuario_admin'
end
