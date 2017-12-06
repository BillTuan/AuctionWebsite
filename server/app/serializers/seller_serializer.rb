
class SellerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :paycard_number, :email
end
