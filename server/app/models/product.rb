class Product < ApplicationRecord
  validates :name,:description, presence: true
  validates :start_time,:end_time, presence: true
  validates :bid_price,:bid_jump,:buy_price, presence: true
  validates :img1,:img2,:img3,:img4,:img5,:img6,:img7,:img8, presence: true
  validates :seller_id, presence: true
   #belongs_to :category
  has_many :category_products,foreign_key: :product_id
  belongs_to :user, :foreign_key => :seller_id, class_name: 'User'
  has_many :categories, through: :category_products

end
