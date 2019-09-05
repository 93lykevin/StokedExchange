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
+ user has_many `following_list` via following_list_id (somewhat much like a shopping cart)
+ user has_many `products listings` via seller_id class_name `Product Listings`


## 'Following List' (this will be my joins table linking `User` <--> `Product Listings`
| column name         | data type | details                   |
|:--------------------|:---------:|:--------------------------|
| `id`                | integer   | not null, primary key     |
| `user_id`           | integer   | not null, foreign key     |
| `product_listing_id`| integer   | not null, foreign key     |
| `created_at`        | datetime  | not null                  |
| `updated_at`        | datetime  | not null                  |

+ `following list` belongs_to `user` via following_list_id
+ `following list` belongs_to `product listing` via product_listing_id
+ index on `user_id`
+ index on `product_listing_id`


## 'Product' 
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `title`           | string    | not null,                 |
| `description`     | string    | not null,                 |
| `image_url`       | string    | not null,                 |
| `brand`           | string    | not null,                 |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `product` has_many `product listings` through `product_id`


## 'Product Listings' 
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `product_id`      | integer   | not null, foreign key     | 
| `seller_id`       | integer   | not null, foreign key     | 
| `size`            | string    | not null,                 |
| `retail_price`    | float     | not null,                 |
| `current_price`   | float     | not null,                 |
| `condition`       | string    | not null,                 |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `product listings` belongs_to `product` via product_id class_name `Product`
+ `product listings` belongs_to `seller` via seller_id class_name `User`
+ `product listings` has_many `following list` via product_listing_id class_name `Following_List`
+ index on `seller_id`
+ index on `product_id`
