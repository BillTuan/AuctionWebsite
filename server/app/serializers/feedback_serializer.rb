class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :comment, :created_at

  attribute :reviewer do
    User.select("id, name, email").find(object.fromuser_id)
  end
  
  attribute :receiver do
    User.select("id, name, email").find(object.touser_id)
  end
  # attribute :seller do
  #   User.where(id: object.product.seller_id).select("id, name, email")  
  # end

  attribute :product do
    Product.select("id, name, img1").find(object.product_id)
  end

end
