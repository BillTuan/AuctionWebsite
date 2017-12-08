class Api::AdminController < ApplicationController
  def all_user
    # get ds sp đã duyệt và đang đấu giá
    @users =  User.all
    if @users.nil?
      @users = []
    end
    render json: @users, status: :ok
  end
end