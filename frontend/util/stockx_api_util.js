export const postStockx = (search) => (
    $.ajax({
        method: 'POST',
        url: 'http://kevtly.pythonanywhere.com/',
        data: {search: search}
    })
)


expot const seedDbStockx = (search) => (
    $.ajax({
        method: 'POST',
        url: 'http://kevtly.pythonanywhere.com/',
        data: { search: search }
    }).then(res => {
        res.forEach(Item {
            
        })
    }
)
//object_id will be my key

//brand: string
//categories: array
//colorway: string
//gender: string
//highest_bid: int
//last_sale: int
//lowest_ask: int
//make: string
//model: string
//name: string
//new_release: boolean
//object_id: string
//////////////////price://////
//product_category: string
//release_date: string
//sales_last_72: int
//searchable_traits: Retail Price: int
//short_description: string
//style_id: string
