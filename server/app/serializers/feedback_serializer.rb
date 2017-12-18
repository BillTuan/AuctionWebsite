class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :comment, :product_id, :created_at

  attribute :reviewer do
    User.where(id: object.fromuser_id).select("id, name, email")  
  end

  attribute :seller do
    User.where(id: object.product.seller_id).select("id, name, email")  
  end
end
