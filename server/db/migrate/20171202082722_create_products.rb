class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img1, default: 'https://i.imgur.com/AcZdR4D.jpg'
      t.string :img2, default: 'https://i.imgur.com/G5RFQwd.jpg'
      t.string :img3, default: 'https://i.imgur.com/lRCoKtC.jpg'
      t.string :img4, default: 'https://i.imgur.com/GoT3FTC.jpg'
      t.string :img5, default: 'https://i.imgur.com/l6tOSEA.png'
      t.string :img6, default: 'https://i.imgur.com/AcZdR4D.jpg'
      t.string :img7, default: 'https://i.imgur.com/J4eXNeX.jpg'
      t.string :img8, default: 'https://i.imgur.com/AcZdR4D.jpg'
      t.integer :seller_id
      t.integer :status, default: 0
      #status = 0-chưa duyệt, 1-đã duyệt và đang đấu giá, 2-hết đấu giá
      t.integer :bid_price, default: 1000
      t.integer :bid_jump, default: 1000
      t.integer :buy_price, default: 100000
      t.string :description, default: ''
      t.timestamp :start_time
      t.timestamp :end_time
      t.timestamps
    end
  end
end
