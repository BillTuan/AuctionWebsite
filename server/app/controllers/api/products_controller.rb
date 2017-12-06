class Api::ProductsController < ApplicationController
  def index
    # get ds sp đã duyệt và đang đấu giá
    @products =  Product.where(status: 1)
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
    categories_products = []
    # cờ mặc định là thêm vào bảng categories_products thất bại
    cate_pro_flag = false
    cate_pro_mess =  ''

    #nếu tạo thành công thì thêm vào bảng categories_products, sau cùng thông báo
    if @product.save
      json  = @product.to_json

      # vòng lập thêm data vào bảng categories_products
      params[:categories_products].each do |cate_pro|
        @category_products = CategoryProduct.new
        @category_products.category_id = cate_pro['id']
        @category_products.product_id = @product.id
        if !@category_products.save
          # thêm danh mục cho sp thất bại thì gán cờ, gán messages
          cate_pro_flag = true
          cate_pro_mess = @category_products.errors.full_messages
        end
        categories_products.push(@category_products)

      end

     # thêm danh mục cho sp thất bại thì xóa sp đã lưu
     if cate_pro_flag
       @product.destroy
       render json: {
         status: :errors,
         full_messages: cate_pro_mess
       }
     else
       # xuất thông báo thêm sp thành công
       render json: @product, status: :created
     end
   else
     # lỗi không thêm được sản phẩm
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
    params.permit(:seller_id, :name, :img1,:img2,:img3,:img4,:img5,:img6,:img7,:img8, :bid_price, :bid_jump, :buy_price, :description, :start_time, :end_time)
  end
end
