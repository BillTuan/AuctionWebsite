class Feedback < ApplicationRecord
  # có quan hệ với User với nhãn là người gửi theo cột fromuser_id
  # belongs_to :FromUser, :foreign_key => :fromuser_id, class_name: 'User'
  #
  # # có quan hệ với User với nhãn là người nhận theo cột touser_id
  # belongs_to :ToUser, :foreign_key => :touser_id, class_name: 'User'
end
