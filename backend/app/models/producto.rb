class Producto < ActiveRecord::Base
  validates_presence_of :nombre, :precio, :peso_en_gramos, :descripcion, :molde

  def self.agregar_figura(params)
    self.create(nombre: params[:nombre],
                precio: params[:precio],
                peso_en_gramos: params[:peso_en_gramos],
                molde: params[:molde],
                descripcion: params[:descripcion]
                )
  end
end
