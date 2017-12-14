class Api::ViewedItemsController < ApplicationController
  #before_action :authenticate_user!, except: [:profile]
  before_action :authenticate_user!
  #### PHẦN XỬ LÝ SP ĐÃ XEM ###
  def index
    @watched_items = WatchedItem.select('product_id').where(user_id: current_user.id)
    product_idArr = []

    @watched_items.each do |t|
      product_idArr.push(t.product_id)
    end

    @products =  Product.find(product_idArr)
    if @products.nil?
      @products = []
    end
    render json: @products, status: :ok
  end

  def create
    @temp = WatchedItem.where(user_id: current_user.id, product_id: params[:item_id]).first
    # kiểm tra xem user và sp này đã được insert chưa
    if !@temp
        @watched_items = WatchedItem.new(user_id: current_user.id, product_id: params[:item_id])
        if @watched_items.save
          render json: {
            status: :ok,
            full_messages: "thêm thành công"
          }, status: :ok
        else
          render json: {
            status: :errors,
            full_messages: "thêm thất bại"
          }, status: :errors
        end
    else
      render json: {
        status: :errors,
        full_messages: "Dư liệu đã được lưu trước đây"
      }, status: :errors
    end
  end

  def destroy
    @temp = WatchedItem.where(user_id: current_user.id, product_id: params[:item_id]).first
    if @temp.destroy
      render json: {
        status: :ok,
        full_messages: "xóa sp khỏi lịch sử xem thành công"
      }, status: :ok
    else
      render json: {
        status: :errors,
        full_messages: "xóa sp khỏi lịch sử xem thành công"
      }, status: :errors
    end
  end

end
