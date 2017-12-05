class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img1, default: ''
      t.string :img2, default: ''
      t.string :img3, default: ''
      t.string :img4, default: ''
      t.string :img5, default: ''
      t.string :img6, default: ''
      t.string :img7, default: ''
      t.string :img8, default: ''

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
