export const fetchProductListings = () => {
    $.ajax({
        method: 'GET',
        url: 'api/product_listings'
    })
}

export const fetchProductListing = (id) => (
    $.ajax({
        method: 'GET', 
        url: `api/product_listing/${id}`
    })
)

export const createProductListing = (product_listing) => {
    return(
        $.ajax({
            method: 'POST',
            url: 'api/product_listings',
            data: {product_listing}
        })
    )
}

export const updateProductListing = (product_listing) => (
    $.ajax({
        method: 'PATCH',
        url: `api/product_listing/${product_listing.id}`,
        data: {product_listing}
    })
)

export const deleteProductListing = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/product_listing/${id}`
    })
)