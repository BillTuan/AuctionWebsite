class AuctionDetail < ApplicationRecord
  validates :product_id, presence: true
  validates :currentPrice, presence: true
  validates :MaxPrice, presence: true
  belongs_to :Bidder, :foreign_key => :user_id, class_name: 'User'
  belongs_to :Product, :foreign_key => :product_id, class_name: 'Product'
  has_many :users, through: :Product
end

