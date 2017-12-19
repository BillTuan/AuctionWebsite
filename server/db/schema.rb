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

ActiveRecord::Schema.define(version: 20171219033719) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "types"
    t.index ["confirmation_token"], name: "index_admins_on_confirmation_token", unique: true
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_admins_on_uid_and_provider", unique: true
  end

  create_table "auction_details", force: :cascade do |t|
    t.integer "product_id"
    t.integer "user_id"
    t.integer "currentPrice"
    t.integer "MaxPrice"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bid_successes", force: :cascade do |t|
    t.integer "product_id"
    t.integer "bider_id"
    t.integer "seller_id"
    t.integer "lastPrice"
    t.integer "status", default: 0
    t.string "description", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "category_products", force: :cascade do |t|
    t.integer "category_id"
    t.integer "product_id"
  end

  create_table "chattings", force: :cascade do |t|
    t.string "idAdmin"
    t.string "idUser"
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "feedbacks", force: :cascade do |t|
    t.integer "fromuser_id"
    t.integer "product_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "touser_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "img1", default: "https://i.imgur.com/AcZdR4D.jpg"
    t.string "img2", default: "https://i.imgur.com/G5RFQwd.jpg"
    t.string "img3", default: "https://i.imgur.com/lRCoKtC.jpg"
    t.string "img4", default: "https://i.imgur.com/GoT3FTC.jpg"
    t.string "img5", default: "https://i.imgur.com/l6tOSEA.png"
    t.string "img6", default: "https://i.imgur.com/AcZdR4D.jpg"
    t.string "img7", default: "https://i.imgur.com/J4eXNeX.jpg"
    t.string "img8", default: "https://i.imgur.com/AcZdR4D.jpg"
    t.integer "seller_id"
    t.integer "status", default: 0
    t.integer "bid_price", default: 1000
    t.integer "bid_jump", default: 1000
    t.integer "buy_price", default: 100000
    t.string "description", default: ""
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image", default: "https://i.imgur.com/WYq03FV.png"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.string "address"
    t.string "paycard_number", default: "0000000000000000"
    t.integer "status", default: 1
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "watched_items", force: :cascade do |t|
    t.integer "user_id"
    t.integer "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
