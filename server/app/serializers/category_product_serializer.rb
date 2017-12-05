class CategoryProductSerializer < ActiveModel::Serializer
  attributes :category_id, :product_id
  #has_many :products, foreign_key: :category_id, serializer: ProductSerializer
 #  def products
 #    ProductSerializer.new(object.products).attributes
 # end
end
