# StreetX
#### A StockX clone built on React/Redux, Ruby on Rails, Python Flask, and hosted on Heroku
### Live Site: https://streetx.herokuapp.com

StreetX is an e-commerce website that acts like a stock exchange. It is inspired by StockX. The current website was built in 2 weeks and new features and improvements will be added in the near future.

User's can view products, place Bids on products they wish to purchase, and place Asks on products they wish to sell. When a Bid and an Ask match, an exchange is completed. Users can search for products through the search bar or browse all pruducts with current prices.


## Key Features
+ Products
    + View all product listings available on the site.
    + Products shown are all real products from StockX.com which have had their details extracted from the StockX database.
+ Listings
    + Currently can only create a sell listing. Will add the rest of CRUD and mimic for bid listing.
    + Can view your own listings through your account page.
+ Search
    + Search for products through the search bar by querying the database and matching the parameters through multiple traits
    + The search feature queries the database after every change in the text input and returns matching search results.
+ User Authentication
    + Users can create a new account or log in with an existing one.
    + Passwords are encrypted using BCrypt and appropriate errors are rendered when a login or signup form is filled incorrectly.
+ Fetches live data from the StockX website
    + Uses an Unofficial StockX SDK written by Kelvin Fichter (https://pypi.org/project/stockx-py-sdk/).
    + Python Flask server: http://kevtly.pythonanywhere.com/.

## Technologies
+ React/Redux
    + Frontend is composed of entirely React and Redux to handle changes in views that react to changes in the state of the application. 
    + Redux states are set up to handle 
+ Ruby on Rails
    + Backend is managed by Ruby on Rails using a PostgreSQL database.
+ Flask, Pythonanywhere, & Unofficial StockX SDK
    + Flask is a micro web framework written in Python. I chose Flask for my project because it is the most simple Python web framework to use. 
    + I chose Pythonanywhere to host my Flask app because it is also very simple to set up a website which hosts and executes the SDK.
    + I also used PostgreSQL as my database for this web app.
    
```
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
```


## Future Additions
+ Finish CRUD for bid/sell.
+ Portfolios which shows a user's complete transaction history.
+ Following Lists which allows users to track specific items and get notifications when prices drop.
+ Data visualization graphs for individual products.
