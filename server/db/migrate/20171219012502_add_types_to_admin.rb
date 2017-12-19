class AddTypesToAdmin < ActiveRecord::Migration[5.1]
  def change
    # types =1 là admin, types=2 là nhân viên
    add_column :admins, :types, :integer
  end
end
