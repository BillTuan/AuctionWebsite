class Product < ApplicationRecord
  validates :name,:description, presence: true
  validates :start_time,:end_time, presence: true
  validates :bid_price,:bid_jump,:buy_price, presence: true
  # validates :img1,:img2,:img3,:img4,:img5,:img6,:img7,:img8, presence: true
   #belongs_to :category
  has_many :categories_products,foreign_key: :product_id
end
