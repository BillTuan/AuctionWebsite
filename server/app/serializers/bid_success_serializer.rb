class BidSuccessSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :bider_id, :seller_id, :status, :lastPrice, :description, :created_at, :updated_at
  # belongs_to :product, foreign_key: :product_id
  # def product
  #   #object.
  # end
end
