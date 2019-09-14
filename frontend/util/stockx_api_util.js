import {createProduct} from './product_api_util';
import ProductIndex from '../components/product/product_index';

export const postStockx = (search) => (
    $.ajax({
        method: 'POST',
        url: 'http://kevtly.pythonanywhere.com/',
        data: {search: search},
    }).then(searchRes => filterSearch(searchRes))
);

//filter & create helper method
const filterSearch = (searchRes) => {      //{{},{},{},{},{}}
    // let search_res = search_json['responseJSON']; //ARRAY [{},{},{},{},{}]
    // let filteredSearchResult = [];
    for(let i=0; i < searchRes.length; i++) {
        let item = searchRes[i];
        let getRetailPrice = item['searchable_traits'];
        // debugger;
        let filteredItem = ({
            'title': item['name'],
            'description': item['description'],
            'brand': item['brand'],
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
            // 'categories': item['categories']
        })
        createProduct(filteredItem)
    }
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

// {
//     brand: "Nike"
//     colorway: "Varsity Red/Varsity Red-White-Black"
//     description: null
//     gender: "men"
//     highest_bid: 511
//     last_sale: 670
//     lowest_ask: 175
//     make: "Nike SB Dunk Low"
//     model: "Supreme Jewel Swoosh Red"
//     new_release: 1
//     object_identifier: "5fd70f8d-4a1f-4284-82f7-0fafabb541fa"
//     product_category: "sneakers"
//     release_date: "2019-09-14"
//     retail_price: 110
//     sales_last_72: 677
//     style_identifier: "CK3480-600"
//     title: "Nike SB Dunk Low Supreme Jewel Swoosh Red"
// }