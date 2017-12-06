class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description,:start_time, :end_time,
   :bid_price, :bid_jump, :buy_price, :img1,:img2,:img3,:img4,:img5,:img6,:img7,:img8

  belongs_to :user, key: :seller, serializer: SellerSerializer
  # def seller_name
  #   object.user.name
  # end
  # def name_category
  #   object.category.name
  # #   description.truncate(50)
  # end
  # # def product_category
  # #   CategorySerializer.new(object.category)
  # # end
  # #belongs_to :Category, :foreign_key => :touser_id
  #has_and_belongs_to_many :categories
  #has_many :categories
end
