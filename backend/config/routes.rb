Rails.application.routes.draw do

  devise_for :users
  #Productos
  post '/productos', to: 'productos#agregar_producto'

  get '/productos/figuras', to: 'productos#show_figuras'

  get '/productos/bombones', to: 'productos#show_bombones'

  get '/productos/huevos', to: 'productos#show_huevos'

  #Pedidos
  post '/pedidos/crear', to: 'pedidos#create'
end
