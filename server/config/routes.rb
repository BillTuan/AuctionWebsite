Rails.application.routes.draw do
  
  #devise_for :users
  namespace :api, defaults: {format: :json} do

    resources :products
    resources :categories

    post 'products/search', to: 'products#search'#, as: 'patient'
    get 'search', to: 'products#search_by_name'
    put 'products/:id', to: 'products#update'
    # lấy dánh sách sản phẩm theo mã category
    get 'categories/:id/products', to: 'products#get_products_by_categoryid'

    get 'admin/alluser', to: 'users#all_user'
    get 'admin/prodntacpt', to: 'products#get_products_not_accepted'

    get '/users/viewed-items', to: 'viewed_items#index'
    post 'users/:user_id/viewed-items/:item_id', to: 'viewed_items#create'
    delete 'users/:user_id/viewed-items/:item_id', to: 'viewed_items#destroy'

    get 'users/:user_id/products', to: 'products#get_products_by_sellerid'
    get 'users/:user_id/auctions', to: 'auction_detail#index'
    get 'users/:user_id/bids', to: 'bid_success#index'
    put 'users/:user_id', to: 'users#update'
    get 'users/:user_id/profile', to: 'users#profile'
    mount_devise_token_auth_for 'User', at: 'auth'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
