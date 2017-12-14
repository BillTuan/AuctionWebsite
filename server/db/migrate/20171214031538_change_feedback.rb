class ChangeFeedback < ActiveRecord::Migration[5.1]
  def change
    rename_column :feedbacks, :touser_id, :product_id
  end
end
