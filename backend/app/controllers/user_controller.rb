class UserController < ApplicationController
  before_action :usuario_params

  def agregar_usuario
    @usuario = User.create!(usuario_params)

    render json: @usuario, status: :created, nothing: true
  end

  private

  def usuario_params
    begin
      params.require(:nombre)
      params.require(:apellido)
      params.require(:email)
      params.require(:password)

      params.permit(:nombre, :apellido, :email, :password, :admin)
    rescue
      render status: :bad_request, nothing: true
    end

  end
end
