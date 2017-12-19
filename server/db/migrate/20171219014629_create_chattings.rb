class CreateChattings < ActiveRecord::Migration[5.1]
  def change
    create_table :chattings do |t|
      t.string :idAdmin
      t.string :idUser
      t.string :message

      t.timestamps
    end
  end
end
