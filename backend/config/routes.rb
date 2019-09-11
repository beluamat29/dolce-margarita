Rails.application.routes.draw do

  # Productos
  get '/productos/figuras', to: 'productos#show_figuras'

  get 'productos/bombones', to: 'productos#show_bombones'

  get 'productos/huevos', to: 'productos#show_huevos'

  #Pedidos
  post 'pedido/crear', to: 'productos#create'
end
