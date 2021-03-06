FactoryBot.define do
  factory :producto do
    nombre { "Barra" }
    descripcion { "Una descripción" }
    precio { 200.0 }
    peso { 50 }

    trait :sin_nombre do
      nombre { nil }
    end
  end
end
