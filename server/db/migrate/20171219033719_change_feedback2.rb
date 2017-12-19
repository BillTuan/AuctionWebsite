class ChangeFeedback2 < ActiveRecord::Migration[5.1]
  def change
    add_column :feedbacks, :touser_id, :integer
  end
end
