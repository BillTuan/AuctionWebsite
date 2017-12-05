class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.integer :fromuser_id
      t.integer :touser_id
      t.integer :rating
      t.string :comment
      t.timestamps
    end
  end
end
