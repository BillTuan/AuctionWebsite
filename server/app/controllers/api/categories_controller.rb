class Api::CategoriesController < ApplicationController
  # lấy ds danh mục 
  def index
    @categories =  Category.all
    if @categories.nil?
      @categories = []
    end
    render json: @categories, status: :ok
  end

  def show
    @category =  Category.find_by_id(params[:id])
    if @category.nil?
      @category = []
    end
    render json: @category, status: :ok
  end

  def create
    @category = Category.new(category_params)
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
 #nếu tham số là json { "company": { "name": "acme", "address": "123 Carrot Street" } }
 # thì nhận:  params[:company] as { "name" => "acme", "address" => "123 Carrot Street" }.
end
