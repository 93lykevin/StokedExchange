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
+ user has_one `cart`
+ user has_one `following_list`
+ user has_one `selling_list`

## 'cart' (this will be my joins table linking users --> carts --> items)
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, foreign key     |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `cart` belongs_to `user` via user_id
+ `cart` has_many `items` via cart_id
+ index on `user_id`

## 'item' 
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `cart_id`         | integer   | not null, foreign key     |
| `seller_id`       | integer   | not null, foreign key     |
| `title`           | integer   | not null,                 |
| `description`     | integer   | not null,                 |
| `price`           | integer   | not null,                 |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |


+ `item` belongs_to `cart` via cart_id
+ `item` belongs_to `seller` via seller_id
+ index on `cart_id`
+ index on `seller_id`