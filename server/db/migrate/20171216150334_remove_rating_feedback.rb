class RemoveRatingFeedback < ActiveRecord::Migration[5.1]
  def change
    remove_column :feedbacks, :rating
  end
end
