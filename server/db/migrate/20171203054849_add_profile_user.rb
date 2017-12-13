class AddProfileUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :phone, :string
    add_column :users, :address, :string
    add_column :users, :paycard_number, :string, default: '0000000000000000'
    add_column :users, :status, :integer, default: 1
    # status 0-bị khóa, 1-bình thường được đấu giá, 2-được đấu và đang xin quyền đăng sp, 3-được đấu và được đăng sp
  end
end
