class Api::AuctionDetailController < ApplicationController
  before_action :authenticate_user!
  def index
    @auction_details = AuctionDetail.select('DISTINCT product_id').where(user_id: current_user.id)
    product_idArr = []

    @auction_details.each do |t|
      product_idArr.push(t.product_id)
    end

    @products =  Product.find(product_idArr)
    if @products.nil?
      @products = []
    end
    render json: @products, status: :ok
  end
end
