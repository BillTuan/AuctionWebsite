 # before_action :authenticate_user!

 

class Api::AuctionDetailController < ApplicationController
  before_action :authenticate_user!
  def index
    @auction_details = AuctionDetail.select('DISTINCT product_id').where(user_id: params[:user_id])
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

  def history
    @auction_details = AuctionDetail.where(product_id: params[:id])
    #user_idArr = []

    #@auction_details.each do |t|
     # user_idArr.push(t.user_id)
    #end

    #@users = User.find(user_idArr)
    #if @users.nil?
      #@users = []
    #end
    render json: @auction_details, status: :ok
  end
end
