class Api::UsersController < ApplicationController
  before_action :authenticate_user!, only: [:update]
  # def all_user
  #   # get ds sp đã duyệt và đang đấu giá
  #   @users =  User.all
  #   if @users.nil?
  #     @users = []
  #   end
  #   render json: @users, status: :ok
  # end

  def update
    @users = User.find(current_user.id)
    if @users.update_attributes(user_params)
      render json: @users, status: :ok
    else
      render json: {status: 'ERROR',messages:'User not updated',data: @users.errors},status: :unprocessable_entity
    end
  end

  def profile
    @user = User.where(id: params[:user_id]).first;
    if @user.nil?
      render json: { status: 'ERROR', messages:'User not exist'}, status: :unprocessable_entity
    else
      render json: @user, status: :ok
    end
  end

  private
  def user_params
    params.permit(:name, :phone,:address,:paycard_number)
  end
end
