#Creando figuras
#
producto_1 = Producto.create(nombre: 'Paleta Conejo', peso_en_gramos: 80, precio: 60.0, descripcion: "Una paleta con forma de conejo", molde: 'figura')
producto_2 = Producto.create(nombre: 'Paleta Sonriente', peso_en_gramos: 80, precio: 70.0, descripcion: "Una paleta con forma de cara feliz", molde: 'figura')
Producto.create(nombre: 'Zapato', peso_en_gramos: 280, precio: 600.0, descripcion: "Un zapato de chocolate", molde: 'figura')
Producto.create(nombre: 'Caja de herramientas', peso_en_gramos: 500, precio: 670.0, descripcion: "Una caja de herramientas", molde: 'figura')

#Creando Bomboneria
producto_4 = Producto.create(nombre: 'Caja Surtida', peso_en_gramos: 200, precio: 175.0, descripcion: "Bombones surtidos", molde: 'bomboneria')
Producto.create(nombre: 'Margaritas Surtidas', peso_en_gramos: 300, precio: 60.0, descripcion: "Bombones surtidos", molde: 'bomboneria')
producto_5 =Producto.create(nombre: 'Bolsa', peso_en_gramos: 240, precio: 600.0, descripcion: "Bombones surtidos", molde: 'bomboneria')
Producto.create(nombre: 'Mamushka', peso_en_gramos: 480, precio: 250.0, descripcion: "Bombones surtidos", molde: 'bomboneria')

#Creando Huevos
producto_3 = Producto.create(nombre: 'Gallina rellena', peso_en_gramos: 350, precio: 500.0, descripcion: "Gallina rellena de golosinas", molde: 'huevo', tamanio: 8)
Producto.create(nombre: 'Gallina rellena', peso_en_gramos: 500, precio: 700.0, descripcion: "Gallina rellena de chocolates", molde: 'huevo', tamanio: 12)
Producto.create(nombre: 'Huevo de Dinosaurio', peso_en_gramos: 300, precio: 600.0, descripcion: "Huevo ralladito", molde: 'huevo', tamanio: 6)
Producto.create(nombre: 'Huevo Kinder', peso_en_gramos: 480, precio: 550.0, descripcion: "Huevo versión kinder", molde: 'huevo', tamanio: 10)

#Creando Pedidos
Pedido.create(producto: producto_1,
              cantidad: 3,
              tipo_chocolate: 'blanco',
              precio_total: 180.0,
              nombre_cliente: 'Luciana Alonso',
              email_cliente: 'lulialonso@gmail.com',
              telefono_cliente: '1144553345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::EN_ESPERA)

Pedido.create(producto: producto_5,
              cantidad: 2,
              tipo_chocolate: 'blanco',
              precio_total: 1200.0,
              nombre_cliente: 'Luciana Alonso',
              email_cliente: 'lulialonso@gmail.com',
              telefono_cliente: '1144553345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::ENTREGADO)

pedido_3 = Pedido.create(producto: producto_2,
              cantidad: 2,
              tipo_chocolate: 'con leche',
              precio_total: 1000.0,
              nombre_cliente: 'Elisabet Tassiello',
              email_cliente: 'eli@gmail.com',
              telefono_cliente: '1147853345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::CANCELADO)

pedido_3.created_at = Date.parse('3rd Nov 2019')
pedido_3.save

Pedido.create(producto: producto_3,
              cantidad: 1,
              tipo_chocolate: 'semi amargo',
              precio_total: 70.0,
              nombre_cliente: 'Lucas Avalos',
              email_cliente: 'eltumba@gmail.com',
              telefono_cliente: '1147853345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',

              estado: Pedido::FINALIZADO)

Pedido.create(producto: producto_4,
              cantidad: 1,
              tipo_chocolate: 'semi amargo',
              precio_total: 175.0,
              nombre_cliente: 'Micaela Alonso',
              email_cliente: 'micaalonso@gmail.com',
              telefono_cliente: '1143963345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::ENTREGADO)


Pedido.create(producto: producto_3,
              cantidad: 4,
              tipo_chocolate: 'semi amargo',
              precio_total: 175.0,
              nombre_cliente: 'Leonardo Conelly',
              email_cliente: 'leo@gmail.com',
              telefono_cliente: '1146763345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::ENTREGADO)

Pedido.create(producto: producto_2,
              cantidad: 2,
              tipo_chocolate: 'semi amargo',
              precio_total: 1340.0,
              nombre_cliente: 'Leonardo Conelly',
              email_cliente: 'leo@gmail.com',
              telefono_cliente: '1146763345',
              lugar_retiro: 'Calle 6 5047 - Berazategui',
              estado: Pedido::FINALIZADO)

#Creando Usuarios Admin
User.create(nombre: 'Elisabet', apellido: 'Tassiello', email: 'eliadmin@gmail.com', password: '123456', admin: true)
User.create(nombre: 'Micaela', apellido: 'Alonso', email: 'micaadmin@gmail.com', password: '123456', admin: true)
User.create(nombre: 'Belen', apellido: 'Amat', email: 'beluadmin@gmail.com', password: '123456', admin: true)
