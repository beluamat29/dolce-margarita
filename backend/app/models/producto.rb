class Producto < ActiveRecord::Base
  validates_presence_of :nombre, :precio, :peso_en_gramos, :descripcion, :molde
  validates_presence_of :tamanio, if: :molde_es_huevo

  def self.agregar_figura(params)
    self.create(nombre: params[:nombre],
                precio: params[:precio],
                peso_en_gramos: params[:peso_en_gramos],
                molde: params[:molde],
                descripcion: params[:descripcion]
                )
  end

  def self.agregar_huevo(params)
    self.create(nombre: params[:nombre],
                precio: params[:precio],
                peso_en_gramos: params[:peso_en_gramos],
                molde: params[:molde],
                descripcion: params[:descripcion],
                tamanio: params[:tamanio]
    )
  end

  def molde_es_huevo
    molde.eql? 'huevo'
  end
end
