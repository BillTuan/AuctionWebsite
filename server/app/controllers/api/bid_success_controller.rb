class Api::BidSuccessController < ApplicationController
  before_action :authenticate_user!
  def index
    #@bid_successes = BidSuccess.select('id, ').joins('INNER JOIN "products" ON "products"."id" = "bid_successes"."product_id"').where(bider_id: params[:user_id])
    @bid_successes = BidSuccess.where(bider_id: current_user.id)
    if @bid_successes.nil?
      @bid_successes = []
    end
    render json: @bid_successes, status: :ok
  end
end
