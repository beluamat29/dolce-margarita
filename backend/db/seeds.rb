#Creando figuras
conejo = Producto.create(nombre: 'Conejo con confites', peso_en_gramos: 60, precio: 30, descripcion: 'Tiernos conejitos con confites surtidos', molde: 'figura')
conejo.picture = Pathname.new(Rails.root.join("db/images/conejos-rocklets.png")).open
conejo.save!

caja_herramientas = Producto.create(nombre: 'Caja de herramientas', peso_en_gramos: 240, precio: 100, descripcion: 'Manos al chocolat.. digo a la obra!', molde: 'figura')
caja_herramientas.picture = Pathname.new(Rails.root.join("db/images/caja-herramientas.png")).open
caja_herramientas.save!

arbol = Producto.create(nombre: 'Arbol de navidad', peso_en_gramos: 100, precio: 180, descripcion: 'Dulce navidad!', molde: 'figura')
arbol.picture = Pathname.new(Rails.root.join("db/images/arbol-navidad.png")).open
arbol.save!

zapato = Producto.create(nombre: 'Zapato', peso_en_gramos: 280, precio: 600.0, descripcion: "Un zapato de chocolate", molde: 'figura')
zapato.picture = Pathname.new(Rails.root.join("db/images/zapato-blanco.png")).open
zapato.save!

bota = Producto.create(nombre: 'Bota', peso_en_gramos: 300, precio: 380, descripcion: "Botita de chocolate", molde: 'figura')
bota.picture = Pathname.new(Rails.root.join("db/images/bota.png")).open
bota.save!

paleta_conejo = Producto.create(nombre: 'Paleta Conejo', peso_en_gramos: 80, precio: 60.0, descripcion: "Una paleta con forma de conejo", molde: 'figura')
paleta_conejo.picture = Pathname.new(Rails.root.join("db/images/paleta-conejo.png")).open
paleta_conejo.save!

paleta_herramientas =  Producto.create(nombre: 'Paletas de herramientas', peso_en_gramos: 80, precio: 70.0, descripcion: "Paletas con distintas formas de herramientas", molde: 'figura')
paleta_herramientas.picture = Pathname.new(Rails.root.join("db/images/martillos.png")).open
paleta_herramientas.save!

paleta_coronas =  Producto.create(nombre: 'Paletas de coronas', peso_en_gramos: 80, precio: 70.0, descripcion: "Para que te sientas como en la realeza", molde: 'figura')
paleta_coronas.picture = Pathname.new(Rails.root.join("db/images/coronas.png")).open
paleta_coronas.save!

conejo_feliz = Producto.create(nombre: 'Paleta conejo sonriente', peso_en_gramos: 20, precio: 45, descripcion: 'Un conejito muy feliz!', molde: 'figura')
conejo_feliz.picture = Pathname.new(Rails.root.join("db/images/conejo-feliz.png")).open
conejo_feliz.save!

#Creando Bomboneria
caja_kilo = Producto.create(nombre: 'Caja 1kg', peso_en_gramos: 1000, precio: 2000.0, descripcion: "Bombones surtidos", molde: 'bomboneria')
caja_kilo.picture =  Pathname.new(Rails.root.join("db/images/caja-kilo.png")).open
caja_kilo.save!

nueces = Producto.create(nombre: 'Bolsa con nueces bañadas', peso_en_gramos: 180, precio: 230, descripcion: "Deliciosas nueces bañadas en chocolate", molde: 'bomboneria')
nueces.picture =  Pathname.new(Rails.root.join("db/images/nueces.png")).open
nueces.save!

bolsa_bombones = Producto.create(nombre: 'Bolsa con huevitos', peso_en_gramos: 240, precio: 600.0, descripcion: "Bombones surtidos", molde: 'bomboneria')
bolsa_bombones.picture = Pathname.new(Rails.root.join("db/images/bolsita-bombones.png")).open
bolsa_bombones.save!

caja_animalitos = Producto.create(nombre: 'Cajita de animales', peso_en_gramos: 250, precio: 110, descripcion: "bellos animalitos rellenos de bombones!", molde: 'bomboneria')
caja_animalitos.picture = Pathname.new(Rails.root.join("db/images/cajitas-animalitos-bombones.png")).open
caja_animalitos.save!

chocomensaje = Producto.create(nombre: 'Chocomensaje de 16 letras', peso_en_gramos: 50, precio: 130, descripcion: "Dejale un dulce mensaje a tus seres queridos", molde: 'bomboneria')
chocomensaje.picture =  Pathname.new(Rails.root.join("db/images/chocomensaje.png")).open
chocomensaje.save!

lata = Producto.create(nombre: 'Lata con bombones surtidos', peso_en_gramos: 100, precio: 140, descripcion: "lata con bombones surtidos", molde: 'bomboneria')
lata.picture =  Pathname.new(Rails.root.join("db/images/lata.png")).open
lata.save!

heart = Producto.create(nombre: 'Corazon con bombones surtidos', peso_en_gramos: 100, precio: 90, descripcion: "lata con bombones surtidos", molde: 'bomboneria')
heart.picture =  Pathname.new(Rails.root.join("db/images/heart.png")).open
heart.save!

mamushka = Producto.create(nombre: 'Mamushka rellena', peso_en_gramos: 120, precio: 190, descripcion: "mamushka con bombones surtidos", molde: 'bomboneria')
mamushka.picture =  Pathname.new(Rails.root.join("db/images/mamushka.png")).open
mamushka.save!

#Creando Huevos
gallina = Producto.create(nombre: 'Gallina rellena', peso_en_gramos: 350, precio: 500.0, descripcion: "Gallina rellena de golosinas", molde: 'huevo', tamanio: 8)
gallina.picture = Pathname.new(Rails.root.join("db/images/gallinas.png")).open
gallina.save!

Producto.create(nombre: 'Gallina rellena', peso_en_gramos: 500, precio: 700.0, descripcion: "Gallina rellena de chocolates", molde: 'huevo', tamanio: 12)
Producto.create(nombre: 'Huevo de Dinosaurio', peso_en_gramos: 300, precio: 600.0, descripcion: "Huevo ralladito", molde: 'huevo', tamanio: 6)
Producto.create(nombre: 'Huevo Kinder', peso_en_gramos: 480, precio: 550.0, descripcion: "Huevo versión kinder", molde: 'huevo', tamanio: 10)

#Creando Pedidos
# Pedido.create(producto: producto_1,
#               cantidad: 3,
#               tipo_chocolate: 'blanco',
#               precio_total: 180.0,
#               nombre_cliente: 'Luciana Alonso',
#               email_cliente: 'lulialonso@gmail.com',
#               telefono_cliente: '1144553345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::EN_ESPERA,
#               medio_de_pago: 'efectivo',
#               pagado: false)
#
# Pedido.create(producto: producto_3,
#               cantidad: 3,
#               tipo_chocolate: 'semi amargo',
#               precio_total: 180.0,
#               nombre_cliente: 'Luciana Alonso',
#               email_cliente: 'lulialonso@gmail.com',
#               telefono_cliente: '1144553345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::EN_ESPERA,
#               medio_de_pago: 'efectivo',
#               pagado: false)
#
# Pedido.create(producto: producto_5,
#               cantidad: 2,
#               tipo_chocolate: 'blanco',
#               precio_total: 1200.0,
#               nombre_cliente: 'Luciana Alonso',
#               email_cliente: 'lulialonso@gmail.com',
#               telefono_cliente: '1144553345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::EN_ESPERA,
#               medio_de_pago: 'efectivo',
#               pagado: true)
#
# Pedido.create(producto: producto_5,
#               cantidad: 2,
#               tipo_chocolate: 'semi amargo',
#               precio_total: 1200.0,
#               nombre_cliente: 'Lucas Traverso',
#               email_cliente: 'ludat@gmail.com',
#               telefono_cliente: '1144553345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::EN_ESPERA,
#               medio_de_pago: 'efectivo',
#               pagado: true)
#
# pedido_3 = Pedido.create(producto: producto_2,
#               cantidad: 2,
#               tipo_chocolate: 'con leche',
#               precio_total: 1000.0,
#               nombre_cliente: 'Elisabet Tassiello',
#               email_cliente: 'eli@gmail.com',
#               telefono_cliente: '1147853345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::CANCELADO,
#               medio_de_pago: 'efectivo',
#               pagado: false)
#
# pedido_3.created_at = Date.parse('3rd Nov 2019')
# pedido_3.save
#
# pedido_4 = Pedido.create(producto: producto_3,
#               cantidad: 1,
#               tipo_chocolate: 'semi amargo',
#               precio_total: 70.0,
#               nombre_cliente: 'Lucas Avalos',
#               email_cliente: 'eltumba@gmail.com',
#               telefono_cliente: '1147853345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::FINALIZADO,
#               medio_de_pago: 'tarjeta',
#               pagado: true)
#
# pedido_4.created_at = Date.parse('29th Nov 2019')
# pedido_4.save
#
# Pedido.create(producto: producto_4,
#               cantidad: 1,
#               tipo_chocolate: 'semi amargo',
#               precio_total: 175.0,
#               nombre_cliente: 'Micaela Alonso',
#               email_cliente: 'micaalonso@gmail.com',
#               telefono_cliente: '1143963345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::ENTREGADO,
#               medio_de_pago: 'tarjeta',
#               pagado: true)
#
#
# Pedido.create(producto: producto_3,
#               cantidad: 4,
#               tipo_chocolate: 'semi amargo',
#               precio_total: 175.0,
#               nombre_cliente: 'Leonardo Conelly',
#               email_cliente: 'leo@gmail.com',
#               telefono_cliente: '1146763345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::ENTREGADO,
#               medio_de_pago: 'efectivo',
#               pagado: true)
#
# Pedido.create(producto: producto_2,
#               cantidad: 2,
#               tipo_chocolate: 'semi amargo',
#               precio_total: 1340.0,
#               nombre_cliente: 'Leonardo Conelly',
#               email_cliente: 'leo@gmail.com',
#               telefono_cliente: '1146763345',
#               lugar_retiro: 'Calle 6 5047 - Berazategui',
#               estado: Pedido::FINALIZADO,
#               medio_de_pago: 'efectivo',
#               pagado: true)

#Creando Usuarios Admin
User.create(nombre: 'Elisabet', apellido: 'Tassiello', email: 'eliadmin@gmail.com', password: '123456', admin: true)
User.create(nombre: 'Micaela', apellido: 'Alonso', email: 'micaadmin@gmail.com', password: '123456', admin: true)
User.create(nombre: 'Belen', apellido: 'Amat', email: 'beluadmin@gmail.com', password: '123456', admin: true)
