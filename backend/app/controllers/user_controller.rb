class UserController < ApplicationController
  before_action :usuario_params, only: [:agregar_usuario]
  before_action :admin_params, only: [:validar_usuario_admin]

  def agregar_usuario
    @usuario = User.create!(usuario_params)

    render json: @usuario, status: :created, nothing: true
  end

  def validar_usuario_admin
    @usuario = User.find_by(email: params[:email])

    begin
    autenticar_usuario(@usuario)

    render json: {id: @usuario.id, email: @usuario.email}, status: :ok, nothing: true
    rescue
      render json: {message: 'La contrasenia es invalida'}, status: :unauthorized, nothing: true
    end
  end

  private

  def autenticar_usuario(usuario)
    raise ValidacionAdminFallida unless usuario.valid_password?(params[:password])
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
