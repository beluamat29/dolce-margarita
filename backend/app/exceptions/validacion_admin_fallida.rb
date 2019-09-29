class ValidacionAdminFallida < StandardError
  def initialize(msg="Usuario o contraseña incorrectos")
    super
  end
end