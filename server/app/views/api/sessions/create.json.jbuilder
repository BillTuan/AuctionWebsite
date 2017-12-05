json.data do
  json.user do
    json.call(@user, :id, :name, :email, :authentication_token)
  end
end
