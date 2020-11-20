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

ActiveRecord::Schema.define(version: 2020_11_19_191422) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.boolean "biking", default: false, null: false
    t.boolean "fishing", default: false, null: false
    t.boolean "stargazing", default: false, null: false
    t.boolean "hiking", default: false, null: false
    t.boolean "wildlife_watching", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_activities_on_spot_id", unique: true
  end

  create_table "amenities", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.boolean "portable_water", default: false, null: false
    t.boolean "kitchen", default: false, null: false
    t.boolean "shower", default: false, null: false
    t.boolean "wifi", default: false, null: false
    t.boolean "electricity", default: false, null: false
    t.boolean "bug_spray", default: false, null: false
    t.boolean "zip_line", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_amenities_on_spot_id", unique: true
  end

  create_table "areas", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "num_sites", null: false
    t.boolean "max_guests", default: false, null: false
    t.boolean "ada_access", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_areas_on_spot_id", unique: true
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "visitor_id", null: false
    t.integer "num_visitors", null: false
    t.date "checkin_date", null: false
    t.date "checkout_date", null: false
    t.integer "total_cost", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_bookings_on_spot_id", unique: true
    t.index ["visitor_id"], name: "index_bookings_on_visitor_id", unique: true
  end

  create_table "details", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.boolean "min_nights", default: false, null: false
    t.string "check_in"
    t.string "check_out"
    t.string "cancelation_policy"
    t.string "on_arrival"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_details_on_spot_id", unique: true
  end

  create_table "essentials", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.boolean "elevator", default: false, null: false
    t.boolean "campfire", default: false, null: false
    t.boolean "toilet", default: false, null: false
    t.boolean "pets", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_essentials_on_spot_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "author_id", null: false
    t.string "title", null: false
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id", unique: true
    t.index ["spot_id"], name: "index_reviews_on_spot_id", unique: true
  end

  create_table "spots", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.string "description", null: false
    t.integer "price", null: false
    t.string "location", null: false
    t.string "country", null: false
    t.integer "rating", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_spots_on_host_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
