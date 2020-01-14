//ACTIONS
const receiveAllFollowing = follow => ({
  type: RECEIVE_ALL_FOLLOW,
  follow
});

const receiveFollowing = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = productId => ({
  type: DELETE_FOLLOW,
  productId
});

//THUNK ACTION CREATORS
export const requestFollows = () => dispatch => {
  FollowAPIUtil.fetchFollows().then(follows =>
    dispatch(receiveAllFollowing(follows))
  );
};
