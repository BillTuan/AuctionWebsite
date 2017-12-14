class Category < ApplicationRecord
  # chỉ tường minh tên khóa ngoại ở product tham chiếu đến category
  #has_many :products, foreign_key: :category_id
  has_many :category_products, foreign_key: :category_id
  has_many :products, through: :category_products
end
