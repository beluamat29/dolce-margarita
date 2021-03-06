# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191127213533) do

  create_table "pedidos", force: :cascade do |t|
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.integer  "producto_id"
    t.string   "email_cliente"
    t.string   "telefono_cliente"
    t.string   "nombre_cliente"
    t.string   "tipo_chocolate"
    t.integer  "cantidad"
    t.string   "lugar_retiro"
    t.float    "precio_total"
    t.string   "estado",           default: "EN ESPERA"
    t.string   "medio_de_pago"
    t.boolean  "pagado"
  end

  create_table "productos", force: :cascade do |t|
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "nombre"
    t.integer  "precio"
    t.integer  "peso_en_gramos"
    t.text     "descripcion"
    t.string   "picture"
    t.string   "molde"
    t.integer  "tamanio"
    t.boolean  "activo",         default: true
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "nombre"
    t.string   "apellido"
    t.boolean  "admin",                  default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
