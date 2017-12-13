class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:profile]
  def all_user
    # get ds sp đã duyệt và đang đấu giá
    @users =  User.all
    if @users.nil?
      @users = []
    end
    render json: @users, status: :ok
  end

  def update
    @users = User.find(params[:user_id])
    if @users.update_attributes(user_params)
      render json: @users, status: :ok
    else
      render json: {status: 'ERROR',messages:'User not updated',data:users.errors},status: :unprocessable_entity
    end
  end

  def profile
    @user = User.find(params[:user_id]);
    if @user.nil?
      render json: {status: 'ERROR',messages:'User not updated',data:users.errors},status: :unprocessable_entity
    end
    render json: @user, status: :ok
  end

  private
  def user_params
    params.permit(:email, :name, :phone,:address,:paycard_number,:status)
  end
end
