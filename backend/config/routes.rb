Rails.application.routes.draw do

  devise_for :users
  #Productos
  post '/productos', to: 'productos#agregar_producto'

  get '/productos/figuras', to: 'productos#show_figuras'

  get '/productos/bombones', to: 'productos#show_bombones'

  get '/productos/huevos', to: 'productos#show_huevos'

  #Pedidos
  get 'pedidos', to: 'pedidos#index'
  post '/pedidos/crear', to: 'pedidos#create'

  #Usuarios
  post '/usuarios', to: 'user#agregar_usuario'

  post '/admin', to: 'user#validar_usuario_admin'
end
