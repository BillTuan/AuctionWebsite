class AuctionDetailSerializer < ActiveModel::Serializer
  attributes :product_id, :currentPrice, :MaxPrice,:Bidder
  belongs_to :Bidder, key: :Bidder, serializer: SellerSerializer
  #belongs_to :Product, key: :Product, serializer: ProductSerializer
	has_many :users,key: :Seller, through: :Product, serializer: SellerSerializer
end

