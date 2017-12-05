class Api::ProductsController < ApplicationController
  def index
    @products =  Product.all
    if @products.nil?
      @products = []
    end
    render json: @products, status: :ok
  end

  def get_products_by_categoryid
    @cate_prods = CategoryProduct.select('product_id').where(category_id: params[:id])
    product_idArr = []

    @cate_prods.each do |t|
      product_idArr.push(t.product_id)
    end

    @products =  Product.find(product_idArr)
    if @products.nil?
      @products = []
    end
    render json: @products, status: :ok
  end

  def search
    @products =  Product.all
    if params[:search]
      @products = Product.search(params[:search])
    end

    if @products.nil?
      @products = []
    end
    render json: @products, status: :ok
  end

  def show
    @product =  Product.find_by_id(params[:id])
    if @product.nil?
      @product = []
    end
    render json: @product, status: :ok
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product, status: :created
     #render :json => @product.to_json
    else
      render :json => { :errors => @product.errors.full_messages }
    end
  end

  def destroy
    @product = Product.where(id: params[:id]).first
    if @product.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
    #render json: @product, status: :created
  end
  private
  def product_params
    params.permit(:name, :img1,:img2,:img3,:img4,:img5,:img6,:img7,:img8, :bid_price, :bid_jump, :buy_price, :description, :start_time, :end_time)
  end
end
