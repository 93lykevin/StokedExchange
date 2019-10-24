export const fetchProducts =() => (
  $.ajax({
    method: 'GET',
    url: 'api/products'
  })
)

export const fetchProduct = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/products/${id}`
    })
  )
}

export const createProduct = (product) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/products`,
      data: {product},
      error: function (err) {
        console.log("Unable to create product");
      }
    })
  )
}

export const updateProduct = (product) => (
  $.ajax({
    method: 'PATCH',
    url: `api/products/${product.id}`,
    data: {product}
  })
)

export const deleteProduct = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/products/${id}`
  })
)

export const searchProducts = query => {
  return(
    $.ajax({
      method: 'GET',
      url: 'api/products/search',
      data: { query }
    })
  )
}