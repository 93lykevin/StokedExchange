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
+ user has_one `wish_list` via wish_list_id
+ user has_one `sell_list` via sell_list_id

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


## 'Sell List' (this will be my joins table linking users --> sell list --> items)
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, foreign key     |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `sell list` belongs_to `user` via user_id
+ `sell list` has_many `items` via sell_list_id
+ index on `user_id`


## 'Product' 
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `wish_list_id`    | integer   | not null, foreign key     | #maybe these can be null b/c not every item has to be in both lists
| `sell_list_id`    | integer   | not null, foreign key     | #^^^
| `title`           | integer   | not null,                 |
| `description`     | integer   | not null,                 |
| `price`           | integer   | not null,                 |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |


+ `product` belongs_to `wish_list` via wish_list_id
+ `product` belongs_to `sell_list` via sell_list_id
+ index on `wish_list_id`
+ index on `sell_list_id`
