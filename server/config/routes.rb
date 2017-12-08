Rails.application.routes.draw do
  #devise_for :users
  namespace :api, defaults: {format: :json} do
    resources :products
    resources :categories
    resources :sessions, only: [:create, :destroy]
    post 'products/search', to: 'products#search'#, as: 'patient'


    # lấy dánh sách sản phẩm theo mã category
    get 'categories/:id/products', to: 'products#get_products_by_categoryid'

    get 'admin/alluser', to: 'admin#all_user'

    get 'users/:user_id/viewed-items', to: 'viewed_items#index'
    post 'users/:user_id/viewed-items/:item_id', to: 'viewed_items#create'
    delete 'users/:user_id/viewed-items/:item_id', to: 'viewed_items#destroy'

    get 'users/:user_id/products', to: 'products#get_products_by_sellerid'
    get 'users/:user_id/auctions', to: 'auction_detail#index'
    get 'users/:user_id/bids', to: 'bid_success#index'
    # get 'users/:id/profile', to: 'users#profile'


  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
