class Api::SessionsController < ApplicationController
  def create
    puts params[:email]
    puts params[:password]
    @user = User.where(email: params[:email]).first
    if @user && @user.valid_password?(params[:password])
      render :create, status: :created
      #render json: @user.as_json(only: [:id, :email, :authentication_token]), status: :created
      # loggin thành công trả về jsoin bao gồm ID, và email của user
    else
      head(:unauthorized)
    end
  end

  def destroy

  end

end
