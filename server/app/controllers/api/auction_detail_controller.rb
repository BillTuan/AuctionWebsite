 # before_action :authenticate_user!



class Api::AuctionDetailController < ApplicationController
  #before_action :authenticate_user!, only: [:create]
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
    @auction_details = AuctionDetail.where(product_id: params[:id]).order('created_at DESC')
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

  def create
    @auction_details = AuctionDetail.new
    # @product = Product.new(product_params)

    #@products = Product.find_by_id(params[:product_id])
    @auction_details.currentPrice = params[:currentPrice]
    @auction_details.MaxPrice = params[:MaxPrice]
    @auction_details.product_id = params[:product_id]
    @auction_details.user_id = params[:user_id]

    # cờ mặc định là thêm vào bảng auction_details thất bại
    #byebug
    auction_details_flag = false
    auction_details_mess =  ''

    if !@auction_details.save
      auction_details_flag = true
      auction_details_mess = @auction_details.errors.full_messages
    end

    if auction_details_flag
      render json: {
        status: :errors,
        full_messages: auction_details_mess
      }
    else
      # xuất thông báo thêm sp thành công
      render json: @auction_details, status: :created
    end

  end




  private
  def auction_detail_params
    params.permit(:user_id, :product_id, :currentPrice,:MaxPrice)
  end

end
