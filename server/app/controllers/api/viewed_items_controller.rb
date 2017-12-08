class Api::ViewedItemsController < ApplicationController
  #### PHẦN XỬ LÝ SP ĐÃ XEM ###
  def index
    @watched_items = WatchedItem.select('product_id').where(user_id: params[:user_id])
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
  end

  def destroy
  end
end
