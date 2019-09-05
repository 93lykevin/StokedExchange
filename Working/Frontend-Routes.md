Our components are organized as follows:
+ `Root`
  + `App`
    + `NavBar`
    + (main component goes here)
    + `Footer`

The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

+ `/` - Homepage - includes splash and index of some products
  + `Splash`
  + `Popular Brands`
  + `Most Popular Items`
  + `New Lowest Ask`
  + `New Highest Bid`
+ `/login`
  + `SessionForm`
+ `/signup`
  + `SessionForm`
+ `/products` - Index of products
+ `/products/new` - List a new product for sale
  + `CreateProductForm`
+ `/Products/:productId` - Product show page. Include buy and sell buttons
  + `ProductShow` - Display historical data and charts.
+ `/Products/:productId/edit` - Edit a product that I have listed for sale
  + `EditProductForm`
+ `/followinglist/` - Basically my shopping cart but cannot buy all at once.
  + `followingListComponent`
+ `/portfolios` - current user's portfolio
+ `/portfolios/:id` - A specific user's portfolio   

