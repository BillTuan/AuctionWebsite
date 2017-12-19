# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# rake db:create
# rake db:migrate
# rake db:seed

User.delete_all
Category.delete_all
Product.delete_all
CategoryProduct.delete_all
WatchedItem.delete_all
BidSuccess.delete_all
Feedback.delete_all
AuctionDetail.delete_all

category1 = Category.create!(name: 'GIA ĐÌNH & VƯỜN')
category2 = Category.create!(name: 'DU LỊCH & THỂ THAO')
category3 = Category.create!(name: 'GIA DỤNG & ĐIỆN')
category4 = Category.create!(name: 'SỨC KHỎE & SẮC ĐẸP')
category5 = Category.create!(name: 'ĐỒ CHƠI')
category6 = Category.create!(name: 'Ô TÔ')
category7 = Category.create!(name: 'XE MÁY')
category8 = Category.create!(name: 'CÔNG CỤ')

u1 = User.create!(email: 'demo1@gmail.com', password: '123456', name: FFaker::NameVN.name, status: 3, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
u2 = User.create!(email: 'demo2@gmail.com', password: '123456', name: FFaker::NameVN.name, status: 3, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
u3 = User.create!(email: FFaker::Internet.free_email, password: '123456', name: FFaker::NameVN.name, status: 3, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
u4 = User.create!(email: FFaker::Internet.free_email, password: '123456', name: FFaker::NameVN.name, status: 3, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
u5 = User.create!(email: 'a@gmail.com', password: '123456', name: FFaker::NameVN.name, status: 1, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
User.create!(email: FFaker::Internet.free_email, password: '123456', name: FFaker::NameVN.name, status: 0, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
User.create!(email: FFaker::Internet.free_email, password: '123456', name: FFaker::NameVN.name, status: 2, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)
User.create!(email: FFaker::Internet.free_email, password: '123456', name: FFaker::NameVN.name, status: 0, phone: FFaker::PhoneNumber.phone_number, address: FFaker::Address.street_address)

  p1 = Product.create!(name: FFaker::Product.product_name,bid_price: 1000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u1.id, status: 1)
  p2 = Product.create!(name: FFaker::Product.product_name,bid_price: 2000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u2.id, status: 1)
  p3 = Product.create!(name: FFaker::Product.product_name,bid_price: 3000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u3.id, status: 0)
  p4 = Product.create!(name: FFaker::Product.product_name,bid_price: 4000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u4.id, status: 1)
  p5 = Product.create!(name: FFaker::Product.product_name,bid_price: 5000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u4.id, status: 1)
  p6 = Product.create!(name: FFaker::Product.product_name,bid_price: 6000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u3.id, status: 0)
  p7 = Product.create!(name: FFaker::Product.product_name,bid_price: 7000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u2.id, status: 2)
  p8 = Product.create!(name: FFaker::Product.product_name,bid_price: 8000,bid_jump: 1000,buy_price: 100000,
  start_time: FFaker::Time.datetime, end_time: FFaker::Time.datetime, description: FFaker::Lorem.paragraph, seller_id: u1.id, status: 2)

  CategoryProduct.create!(category_id: category1.id, product_id: p1.id)
  CategoryProduct.create!(category_id: category1.id, product_id: p2.id)
  CategoryProduct.create!(category_id: category2.id, product_id: p2.id)
  CategoryProduct.create!(category_id: category2.id, product_id: p3.id)
  CategoryProduct.create!(category_id: category3.id, product_id: p3.id)
  CategoryProduct.create!(category_id: category5.id, product_id: p4.id)
  CategoryProduct.create!(category_id: category3.id, product_id: p4.id)
  CategoryProduct.create!(category_id: category6.id, product_id: p5.id)
  CategoryProduct.create!(category_id: category8.id, product_id: p5.id)
  CategoryProduct.create!(category_id: category7.id, product_id: p5.id)
  CategoryProduct.create!(category_id: category4.id, product_id: p6.id)
  CategoryProduct.create!(category_id: category7.id, product_id: p6.id)
  CategoryProduct.create!(category_id: category8.id, product_id: p7.id)
  CategoryProduct.create!(category_id: category7.id, product_id: p8.id)
  CategoryProduct.create!(category_id: category8.id, product_id: p8.id)
  CategoryProduct.create!(category_id: category7.id, product_id: p8.id)

WatchedItem.create!(user_id: u1.id, product_id: p1.id);
WatchedItem.create!(user_id: u2.id, product_id: p2.id);
WatchedItem.create!(user_id: u3.id, product_id: p3.id);
WatchedItem.create!(user_id: u4.id, product_id: p4.id);
WatchedItem.create!(user_id: u1.id, product_id: p5.id);
WatchedItem.create!(user_id: u2.id, product_id: p6.id);
WatchedItem.create!(user_id: u3.id, product_id: p7.id);
WatchedItem.create!(user_id: u4.id, product_id: p8.id);

AuctionDetail.create!(product_id: p1.id, user_id: u1.id, currentPrice: 2000, MaxPrice:50000);
AuctionDetail.create!(product_id: p1.id, user_id: u2.id, currentPrice: 3000, MaxPrice:50000);
AuctionDetail.create!(product_id: p2.id, user_id: u2.id, currentPrice: 4000, MaxPrice:50000);
AuctionDetail.create!(product_id: p2.id, user_id: u3.id, currentPrice: 5000, MaxPrice:50000);
AuctionDetail.create!(product_id: p7.id, user_id: u3.id, currentPrice: 6000, MaxPrice:50000);
AuctionDetail.create!(product_id: p7.id, user_id: u4.id, currentPrice: 7000, MaxPrice:50000);
AuctionDetail.create!(product_id: p7.id, user_id: u1.id, currentPrice: 8000, MaxPrice:50000);
AuctionDetail.create!(product_id: p8.id, user_id: u3.id, currentPrice: 9000, MaxPrice:50000);

BidSuccess.create(product_id: p8.id, bider_id: u3.id, lastPrice: 9000, seller_id: u1.id, status: 0);
BidSuccess.create(product_id: p7.id, bider_id: u1.id, lastPrice: 8000, seller_id: u2.id, status: 0);

Feedback.create!(fromuser_id: u1.id, product_id: p2.id, touser_id: u2.id, comment: "đồ tốt, giao đúng hẹn");
Feedback.create!(fromuser_id: u2.id, product_id: p3.id, touser_id: u3.id, comment: "đồ tốt, giao đúng hẹn");
Feedback.create!(fromuser_id: u3.id, product_id: p4.id, touser_id: u4.id, comment: "đồ tốt, giao đúng hẹn");
Feedback.create!(fromuser_id: u4.id, product_id: p5.id, touser_id: u5.id, comment: "đồ tốt, giao đúng hẹn");
Feedback.create!(fromuser_id: u1.id, product_id: p8.id, touser_id: u3.id, comment: "Không thanh toán");
Feedback.create!(fromuser_id: u2.id, product_id: p7.id, touser_id: u1.id, comment: "Không nhận hàng");


Admin.create(email: 'admin1@gmail.com', password: '123456', types: 1)
Admin.create(email: 'admin1@gmail.com', password: '123456', types: 1)
Admin.create(email: 'admin1@gmail.com', password: '123456', types: 2)
Admin.create(email: 'admin1@gmail.com', password: '123456', types: 2)