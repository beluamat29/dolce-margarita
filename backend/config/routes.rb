Rails.application.routes.draw do

 # Productos
 get '/productos/figuras', to: 'productos#show_figuras'
end
