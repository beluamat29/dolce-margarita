class UserController < ApplicationController
  before_action :usuario_params

  def agregar_usuario
    @usuario = User.create(params)

    render json: @usuario, status: :created, nothing: true
  end

  def usuario_params
    params.permit(:nombre, :apellido, :email, :encrypted_password)
  end
end
