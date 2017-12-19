class Api::AdminController < ApplicationController
    def all_users
        # get ds sp đã duyệt và đang đấu giá
        @users =  User.all
        if @users.nil?
          @users = []
        end
        render json: @users, status: :ok
    end

    
  def users_update
    @users = User.find(params[:user_id])
    if @users.update_attributes(user_params)
      render json: @users, status: :ok
    else
      render json: {status: 'ERROR',messages:'User not updated',data: @users.errors},status: :unprocessable_entity
    end
  end
  def update_status_product
    @product = Product.find(params[:product_id])
    @product.status = params[:status]
    if @product.save
      render json: @product, status: :ok
    else
      render json: {status: 'ERROR',messages:'Product not updated',data: @product.errors},status: :unprocessable_entity
    end
  end
  private
  def user_params
    params.permit(:name, :phone,:address,:paycard_number, :status)
  end
end
