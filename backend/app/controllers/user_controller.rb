class UserController < ApplicationController
  before_action :usuario_params, only: [:agregar_usuario]
  before_action :admin_params, only: [:validar_usuario_admin]

  def agregar_usuario
    @usuario = User.create!(usuario_params)

    render json: @usuario, status: :created, nothing: true
  end

  def validar_usuario_admin
    @usuario = User.find_by(email: "belenadmin@gmail.com")

    autenticar_usuario(@usuario)

    render json: {id: @usuario.id, email: @usuario.email}, status: :ok, nothing: true
  end

  private

  def autenticar_usuario(usuario)
    begin
    raise ValidacionAdminFallida unless usuario.valid_password?(params[:password])
    rescue
      render status: :ok, message: 'La contrasenia es invalida', nothing: true
    end
  end

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

  def admin_params
    begin
      params.require(:email)
      params.require(:password)

      params.permit(:email, :password)
    rescue
      render status: :bad_request, nothing: true
    end

  end
end
