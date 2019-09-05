# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed, unique |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `email, unique: true`
+ index on `session_token, unique: true`
+ user has_one `wish_list` via wish_list_id (somewhat much like a shopping cart)
+ user has_many `products` via seller_id

## 'Wish List' (this will be my joins table linking users --> wish list --> items)
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, foreign key     |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `wish list` belongs_to `user` via user_id
+ `wish list` has_many `items` via wish_list_id
+ index on `user_id`


## 'Wish List Items' (this will be my joins table linking users --> sell list --> items)
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, foreign key     |
| `wishlist_id`     | integer   | not null, foreign key     |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `wish list items` belongs_to `user` via user_id
+ `wish list items` has_many `items` via sell_list_id
+ index on `user_id`


## 'Product' 
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `seller_id`       | integer   | not null, foreign key     | 
| `title`           | integer   | not null,                 |
| `description`     | integer   | not null,                 |
| `price`           | integer   | not null,                 |
| `image_url`       | integer   | not null,                 |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `product` belongs_to `seller` via seller_id 
+ index on `seller_id`