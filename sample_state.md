```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "kevin"
        password_digest: ,
        session_token: ,
        cart: ,
        follow_list: ,
        selling_list: ,
      },
      2: {
        id: 1,
        username: "mary"
        password_digest: ,
        session_token: ,
        cart: ,
        follow_list: ,
        selling_list: ,
      },
      3: {
        id: 1,
        username: "mohit"
        password_digest: ,
        session_token: ,
        cart: ,
        follow_list: ,
        selling_list: ,
      }
    },
    cart: {
      10: {
        userId: 11,
        itemId: 1,
      },
      11: {
        userId: 25,
        itemId: 1,
      },
      12: {
        userId: 25,
        itemId: 3,
      },
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    chirpForm: ["Chirp body cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```