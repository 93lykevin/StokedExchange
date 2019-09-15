import {createProduct} from './product_api_util';
import ProductIndex from '../components/product/product_index';
// export const updateItemStockx = (item_identifier) => {

// }

export const search = (search) => (
    $.ajax({
        method: 'POST',
        url: 'http://kevtly.pythonanywhere.com/',
        data: { search: search }
    })
);

export const getPicture = (searching) => { //
    search(searching).then(data => {
        let item = data[0];
        let media = item['media'];
        let imgUrl = media['imageUrl']
        return imgUrl;
    })
}

export const postStockx = (search) => (
    $.ajax({
        method: 'POST',
        url: 'http://kevtly.pythonanywhere.com/',
        data: {search: search},
    }).then(searchRes => filterSearch(searchRes))
);

//filter & create helper method
const filterSearch = (searchRes) => {      //[ARRAY OF OBJECTS B/C USED AS .THEN]
    for(let i=0; i < searchRes.length; i++) {
        let item = searchRes[i];
        let getRetailPrice = item['searchable_traits'];
        let getImageUrl = item['media']
        // debugger;
        let filteredItem = ({
            'title': item['name'],
            'description': item['description'],
            'brand': item['brand'],
            'ticker_symbol': item['ticker_symbol'],
            'release_date': item['release_date'],
            'retail_price': Object.values(getRetailPrice)[2],
            'colorway': item['colorway'],
            'gender': item['gender'],
            'make': item['make'],
            'model': item['model'],
            'object_identifier': item['objectID'],
            'style_identifier': item['style_id'],
            'product_category': item['product_category'],
            'highest_bid': item['highest_bid'],
            'last_sale': item['last_sale'],
            'lowest_ask': item['lowest_ask'],
            'sales_last_72': item['sales_last_72'],
            'new_release': item['new_release'],
            'categories': item['categories'],
            'image_url': Object.values(getImageUrl)[2]
        })
        createProduct(filteredItem)
    }
}

export const seedDb = () => {
    postStockx("Supreme")
    postStockx("Adidas")
    postStockx("Off White")
    postStockx("Fear of God")
    postStockx("Nike")
    postStockx("Jordan")
    postStockx("Palace")
    postStockx("Bape")
    postStockx("Kith")
    postStockx("Awake")
    postStockx("Artist Merch")
    postStockx("Kaws")
    postStockx("GOLF")
    postStockx("Polo")
    postStockx("Miscellaneous")
}

// export const seedCreate = (search) => {
//     postStockx(search).then(searchRes => {
//         filterSearch(searchRes).then(filterArr => {
//             for(let i=0; i<filterArr.length; i++) {
//                 createProduct(filterArr[i])
//                 console.log(filterArr[i])
//             }
//         })
//     })
// }
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
//object_itentifier: string
//////////////////price://////
//product_category: string
//release_date: string
//sales_last_72: int
//searchable_traits: Retail Price: int
//short_description: string
//style_itentifier: string
