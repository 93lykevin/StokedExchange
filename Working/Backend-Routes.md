# Backend Routes

## HTML

+ `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
+ `POST /api/users` - sign up
+ `GET /api/users/:id` - get a user's portfolio. Shows items on sale, gains/loss, total market value

### `session`
+ `POST /api/session` - log in
+ `DELETE /api/session` - log out

### `products`
+ `GET /api/products` - get all products
+ `GET /api/product/:id` - get a single product i.e. jordan 1 Retro High Obsidian
+ `POST /api/products` - create a new product for sale
+ `PATCH /api/products/:id` - edit a product on sale
+ `DELETE /api/products/:id` - remove a product on sale

### `followinglist`
+ `GET /api/followinglist` - return current user's followinglist items
+ `POST /api/followinglist` - add item to followinglist
+ `DELETE /api/followinglist` - remove item from followinglist

### `search`
+ `GET /api/search` - return items from a search