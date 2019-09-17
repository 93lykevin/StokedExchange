json.array!(@products) do |product|
    json.extract! product, :colorway, :make, :title, :image_url
end