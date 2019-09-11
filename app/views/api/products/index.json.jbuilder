@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :title, :description, :brand, :release_date, :retail_price
  end
end