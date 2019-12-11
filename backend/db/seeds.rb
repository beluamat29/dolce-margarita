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
geometrico = Producto.create(nombre: 'Huevo geometrico', peso_en_gramos: 360, precio: 240, descripcion: "Huevo del futuro", molde: 'huevo', tamanio: 14)
geometrico.picture = Pathname.new(Rails.root.join("db/images/geometrico.png")).open
geometrico.save!

huevo_conejitos = Producto.create(nombre: 'Conejitos con gomitas', peso_en_gramos: 60, precio: 90, descripcion: "Bellos conejitos rellenos de gomitas", molde: 'huevo', tamanio: 10)
huevo_conejitos.picture = Pathname.new(Rails.root.join("db/images/huevo-conejitos.png")).open
huevo_conejitos.save!

huevo_pasas = Producto.create(nombre: 'Huevo con pasas de uva', peso_en_gramos: 180, precio: 190, descripcion: "Huevo con pasas de uva al frente", molde: 'huevo', tamanio: 12)
huevo_pasas.picture = Pathname.new(Rails.root.join("db/images/huevos-con-pasas.png")).open
huevo_pasas.save!

huevo_oreo = Producto.create(nombre: 'Huevo con Oreos', peso_en_gramos: 180, precio: 190, descripcion: "Huevo con oreos al frente", molde: 'huevo', tamanio: 12)
huevo_oreo.picture = Pathname.new(Rails.root.join("db/images/huevos-con-oreos.png")).open
huevo_oreo.save!

huevo_ddl = Producto.create(nombre: 'Huevo relleno de dulce de leche', peso_en_gramos: 60, precio: 120, descripcion: "Huevo con oreos al frente", molde: 'huevo', tamanio: 12)
huevo_ddl.picture = Pathname.new(Rails.root.join("db/images/huevos-ddl.png")).open
huevo_ddl.save!

gallina = Producto.create(nombre: 'Gallina rellena', peso_en_gramos: 350, precio: 500.0, descripcion: "Gallina rellena de golosinas", molde: 'huevo', tamanio: 8)
gallina.picture = Pathname.new(Rails.root.join("db/images/gallinas.png")).open
gallina.save!

huevo_primaveral = Producto.create(nombre: 'Huevo primaveral', peso_en_gramos: 250, precio: 70.0, descripcion: "Gallina rellena de golosinas", molde: 'huevo', tamanio: 15)
huevo_primaveral.picture = Pathname.new(Rails.root.join("db/images/huevo-primaveral.png")).open
huevo_primaveral.save!

#Creando Pedidos

#Pedidos del 3 de noviembre
pedido_1 = Pedido.create(producto: huevo_pasas,
              cantidad: 3,
              tipo_chocolate: 'blanco',
              precio_total: huevo_pasas.precio * 3,
              nombre_cliente: 'Luciana Alonso',
              email_cliente: 'lulialonso@gmail.com',
              telefono_cliente: '1144553345',
              lugar_retiro: 'Perdriel 74 - CABA',
              estado: Pedido::EN_ESPERA,
              medio_de_pago: 'efectivo',
              pagado: false)

pedido_1.created_at = Date.parse('3rd Nov 2019')
pedido_1.save

pedido_2 = Pedido.create(producto: caja_herramientas,
              cantidad: 2,
              tipo_chocolate: 'blanco',
              precio_total: caja_herramientas.precio * 2,
              nombre_cliente: 'Luciana Alonso',
              email_cliente: 'lulialonso@gmail.com',
              telefono_cliente: '1144553345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::EN_ESPERA,
              medio_de_pago: 'efectivo',
              pagado: false)

pedido_2.created_at = Date.parse('3rd Nov 2019')
pedido_2.save

pedido_3 = Pedido.create(producto: mamushka,
              cantidad: 1,
              tipo_chocolate: 'blanco',
              precio_total: mamushka.precio ,
              nombre_cliente: 'Lucas Avalos',
              email_cliente: 'lucas.avalos@gmail.com',
              telefono_cliente: '1144567245',
              lugar_retiro: 'Perdriel 74 - CABA',
              estado: Pedido::ENTREGADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_3.created_at = Date.parse('3rd Nov 2019')
pedido_3.save

pedido_4 = Pedido.create(producto: arbol,
              cantidad: 1,
              tipo_chocolate: 'blanco',
              precio_total: arbol.precio ,
              nombre_cliente: 'Elisabet Tassiello',
              email_cliente: 'elisabet.tassiello@gmail.com',
              telefono_cliente: '1145767245',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::ENTREGADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_4.created_at = Date.parse('3rd Nov 2019')
pedido_4.save

pedido_5 = Pedido.create(producto: arbol,
              cantidad: 4,
              tipo_chocolate: 'con leche',
              precio_total: arbol.precio * 4 ,
              nombre_cliente: 'Cecilia Amat',
              email_cliente: 'ceci_amat@gmail.com',
              telefono_cliente: '1145294725',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::ENTREGADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_5.created_at = Date.parse('3rd Nov 2019')
pedido_5.save

pedido_6 = Pedido.create(producto: heart,
              cantidad: 2,
              tipo_chocolate: 'con leche',
              precio_total: arbol.precio * 4 ,
              nombre_cliente: 'Cecilia Amat',
              email_cliente: 'ceci_amat@gmail.com',
              telefono_cliente: '1145294725',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::CANCELADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_6.created_at = Date.parse('3rd Nov 2019')
pedido_6.save

pedido_7 = Pedido.create(producto: paleta_coronas,
              cantidad: 5,
              tipo_chocolate: 'blanco',
              precio_total: paleta_coronas.precio * 5 ,
              nombre_cliente: 'Fernando Dodino',
              email_cliente: 'fer_dodino@gmail.com',
              telefono_cliente: '1145900825',
              lugar_retiro: 'Calle 13 4826 - Berazategui',
              estado: Pedido::FINALIZADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_7.created_at = Date.parse('3rd Nov 2019')
pedido_7.save

pedido_8 = Pedido.create(producto: nueces,
              cantidad: 2,
              tipo_chocolate: 'blanco',
              precio_total: nueces.precio * 2 ,
              nombre_cliente: 'Fernando Dodino',
              email_cliente: 'fer_dodino@gmail.com',
              telefono_cliente: '1559973345',
              lugar_retiro: 'Perdriel 74 - CABA',
              estado: Pedido::CANCELADO,
              medio_de_pago: 'efectivo',
              pagado: false)

pedido_8.created_at = Date.parse('3rd Nov 2019')
pedido_8.save

pedido_9 = Pedido.create(producto: paleta_herramientas,
              cantidad: 1,
              tipo_chocolate: 'semi amargo',
              precio_total: paleta_herramientas.precio * 5 ,
              nombre_cliente: 'Lucas Traverso',
              email_cliente: 'ludat@gmail.com',
              telefono_cliente: '1145967825',
              lugar_retiro: 'Calle 13 4826 - Berazategui',
              estado: Pedido::EN_PREPARACION,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_9.created_at = Date.parse('3rd Nov 2019')
pedido_9.save

pedido_10 = Pedido.create(producto: huevo_primaveral,
              cantidad: 1,
              tipo_chocolate: 'semi amargo',
              precio_total: huevo_primaveral.precio ,
              nombre_cliente: 'David Correa',
              email_cliente: 'davejco@gmail.com',
              telefono_cliente: '1557973345',
              lugar_retiro: 'Perdriel 74 - CABA',
              estado: Pedido::EN_PREPARACION,
              medio_de_pago: 'efectivo',
              pagado: false)

pedido_10.created_at = Date.parse('3rd Nov 2019')
pedido_10.save

#Pedidos del 24 de noviembre
pedido_11 = Pedido.create(producto: conejo_feliz,
              cantidad: 3,
              tipo_chocolate: 'blanco',
              precio_total: conejo_feliz.precio * 3,
              nombre_cliente: 'Luciana Alonso',
              email_cliente: 'lulialonso@gmail.com',
              telefono_cliente: '1144553345',
              lugar_retiro: 'Perdriel 74 - CABA',
              estado: Pedido::EN_ESPERA,
              medio_de_pago: 'efectivo',
              pagado: false)

pedido_11.created_at = Date.parse('24th Nov 2019')
pedido_11.save

pedido_12 = Pedido.create(producto: caja_herramientas,
              cantidad: 2,
              tipo_chocolate: 'con leche',
              precio_total: caja_herramientas.precio * 2,
              nombre_cliente: 'Fernando Dodino',
              email_cliente: 'fer_dodino@gmail.com',
              telefono_cliente: '11446783345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::EN_ESPERA,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_12.created_at = Date.parse('24th Nov 2019')
pedido_12.save

pedido_13 = Pedido.create(producto: heart,
              cantidad: 4,
              tipo_chocolate: 'blanco',
              precio_total: heart.precio ,
              nombre_cliente: 'Lucas Avalos',
              email_cliente: 'lucas.avalos@gmail.com',
              telefono_cliente: '1144567245',
              lugar_retiro: 'Perdriel 74 - CABA',
              estado: Pedido::CANCELADO,
              medio_de_pago: 'efectivo',
              pagado: false)

pedido_13.created_at = Date.parse('24th Nov 2019')
pedido_13.save

pedido_14 = Pedido.create(producto: nueces,
              cantidad: 3,
              tipo_chocolate: 'blanco',
              precio_total: nueces.precio ,
              nombre_cliente: 'Miguel Lopez',
              email_cliente: 'migue_t@gmail.com',
              telefono_cliente: '1145729045',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::FINALIZADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_14.created_at = Date.parse('24th Nov 2019')
pedido_14.save

pedido_15 = Pedido.create(producto: huevo_conejitos,
              cantidad: 4,
              tipo_chocolate: 'con leche',
              precio_total: huevo_conejitos.precio * 4 ,
              nombre_cliente: 'Cecilia Amat',
              email_cliente: 'ceci_amat@gmail.com',
              telefono_cliente: '1145294725',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::ENTREGADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_15.created_at = Date.parse('24th Nov 2019')
pedido_15.save

pedido_16 = Pedido.create(producto: bota,
              cantidad: 2,
              tipo_chocolate: 'con leche',
              precio_total: bota.precio * 2 ,
              nombre_cliente: 'Juan Alvear',
              email_cliente: 'jalvear@gmail.com',
              telefono_cliente: '1145294565',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::CANCELADO,
              medio_de_pago: 'efectivo',
              pagado: true)

pedido_16.created_at = Date.parse('3rd Nov 2019')
pedido_16.save

#Creando Usuarios Admin
User.create(nombre: 'Elisabet', apellido: 'Tassiello', email: 'eliadmin@gmail.com', password: '123456', admin: true)
User.create(nombre: 'Micaela', apellido: 'Alonso', email: 'micaadmin@gmail.com', password: '123456', admin: true)
User.create(nombre: 'Belen', apellido: 'Amat', email: 'beluadmin@gmail.com', password: '123456', admin: true)
