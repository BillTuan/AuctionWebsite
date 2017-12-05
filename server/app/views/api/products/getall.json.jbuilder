json.data do
  json.datasize @products.count
  json.products @products do |product|
    # json.id product.id
    json.name product.name
    #json.call(product, :id, :name, :description,:start_time, :end_time, :bid_price, :bid_jump, :buy_price, :id_category,:name_category)
  end
end
