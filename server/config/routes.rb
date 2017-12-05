Rails.application.routes.draw do
  #devise_for :users
  namespace :api, defaults: {format: :json} do
    resources :products
    resources :categories
    resources :sessions, only: [:create, :destroy]
    post 'products/search', to: 'products#search'#, as: 'patient'


    # lấy dánh sách sản phẩm theo mã category
    get 'categories/:id/products', to: 'products#get_products_by_categoryid'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
