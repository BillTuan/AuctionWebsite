
class UserSerializer < ActiveModel::Serializer
  attributes :id, :address, :name, :phone, :paycard_number, :email, :status, :image
end
