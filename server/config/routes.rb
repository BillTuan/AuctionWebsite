Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/users/auth'
  mount_devise_token_auth_for 'Admin', at: 'api/admins/auth'
  #devise_for :users
  namespace :api, defaults: {format: :json} do
    ### phần category và products
    # lấy ds danh mục sản phẩm
    get 'categories', to: 'categories#index'

    # lấy toàn bộ danh sách sản phảm trong csdl đã duyệt và đang đấu giá
    get 'products', to: 'products#index'

    # lấy ds sản phẩm của một category theo id của category
    get 'categories/:category_id/products', to: 'products#get_products_by_categoryid'

    # xem thông tin cụ thể của một sản phẩm
    get 'products/:product_id', to: 'products#show'

    # cập nhật sản phẩm
    put 'products/:product_id', to: 'products#update'

    # đăng sản phẩm mới, body nhận vào các thông tin của sp
    post 'products', to: 'products#create'

    # lấy lịch sử đấu giá theo product id
    get 'products/:id/history', to: 'auction_detail#history'

    # lấy sản phẩm theo id người bán
    get 'products/seller/:seller_id', to: 'products#get_products_by_sellerid'

    # lấy tìm sp theo tên
    get 'search', to: 'products#search_by_name'

    # gửi feedback đến user và sp
    post 'products/:product_id/feedbacks', to: 'feedbacks#create'

    # lấy feedback của user và sp
    get 'products/:product_id/feedbacks', to: 'feedbacks#product_feedbacks'

    #### PHẦN CỦA ADMIN ####
    # admin lấy ds các users
    get 'admin/alluser', to: 'admin#all_users'

    # admin cập nhật users
    put 'admin/users/:user_id', to: 'admin#users_update'

    # admin lấy product chưa duyệt
    get 'admin/prodntacpt', to: 'products#get_products_not_accepted'

    # admin cập nhật trạng thái của sản phẩm
    put 'admin/products/:product_id', to: 'admin#update_status_product'

    # admin lấy ds feedback
    get 'admin/feedbacks', to: 'feedbacks#index'
    #### PHẦN CỦA USERS ###

    # lấy thông tin user bất kỳ
    get 'users/:user_id/profile', to: 'users#profile'

    # cập nhật users, user tự cập nhật mình, ko dc cập nhật email, status
    put 'users', to: 'users#update'

    # xem ds các sp mà mình đã xem
    get 'users/viewed_items', to: 'viewed_items#index'

    # ghi nhận sp mà user vừa xem
    post 'users/viewed-items/:item_id', to: 'viewed_items#create'

    # xóa sp trong ds đã xem
    delete 'users/viewed-items/:item_id', to: 'viewed_items#destroy'

    # xem các sp đã thắng đấu giá
    get 'users/bids', to: 'bid_success#index'

    # xem các sp đã tham gia đấu giá
    get 'users/auctions', to: 'auction_detail#index'

    # xem các sp mà mình đã đăng
    get 'users/products', to: 'products#get_products_of_current_user'

    #them san pham dau gia
   post 'products/auctions', to: 'auction_detail#create'
    #resources :products
    #resources :categories
    #post 'products/search', to: 'products#search'#, as: 'patient'
    #get 'search', to: 'products#search_by_name'
    #put 'products/:id', to: 'products#update'
    # lấy dánh sách sản phẩm theo mã category
    #get 'categories/:id/products', to: 'products#get_products_by_categoryid'
    #get 'admin/alluser', to: 'users#all_user'
    #get 'admin/prodntacpt', to: 'products#get_products_not_accepted'
    #get '/users/viewed-items', to: 'viewed_items#index'
    #delete 'users/:user_id/viewed-items/:item_id', to: 'viewed_items#destroy'
    #get 'users/:user_id/products', to: 'products#get_products_by_sellerid'
    #get 'users/:user_id/auctions', to: 'auction_detail#index'
    #get 'users/:user_id/bids', to: 'bid_success#index'
    #put 'users/:user_id', to: 'users#update'
    #get 'users/:user_id/profile', to: 'users#profile'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
