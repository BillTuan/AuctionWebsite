class Api::FeedbacksController < ApplicationController
    before_action :authenticate_user!, only: [:create]
    def index
        @feedbacks = Feedback.all
        if @feedbacks.nil?
            @feedbacks = []
        end
        render json: @feedbacks, status: :ok
    end

    def product_feedbacks
        @feedbacks = Feedback.where(product_id: params[:product_id])
        if @feedbacks.nil?
            @feedbacks = []
        end
        render json: @feedbacks, status: :ok
    end

    def create
        @feedback = Feedback.new(fromuser_id: current_user.id, comment: params[:comment], product_id: params[:product_id], touser_id: params[:touser_id])
        if @feedback.save
            render json: @feedback, status: :created
        else
            render json: {status: 'ERROR',messages:'User not updated',data: @feedback.errors}, status: :unprocessable_entity
        end    
    end
end
