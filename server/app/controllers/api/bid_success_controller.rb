class Api::BidSuccessController < ApplicationController
  def index
    #@bid_successes = BidSuccess.select('id, ').joins('INNER JOIN "products" ON "products"."id" = "bid_successes"."product_id"').where(bider_id: params[:user_id])
@bid_successes = BidSuccess.where(bider_id: params[:user_id])
    if @bid_successes.nil?
      @bid_successes = []
    end
    render json: @bid_successes, status: :ok
  end
end
