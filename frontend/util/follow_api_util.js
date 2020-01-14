export const fetchFollows = () =>
  $.ajax({
    method: "GET",
    url: "api/follows"
  });

export const fetchFollow = follow_id =>
  $.ajax({
    method: "GET",
    url: "api/follows",
    data: { follow_id }
  });

export const fetchUserFollows = user_id =>
  $.ajax({
    method: "GET",
    url: "api/follows",
    data: { user_id }
  });

export const createFollow = follow =>
  $.ajax({
    method: "POST",
    url: "api/follows",
    data: { follow }
  });

export const updateFollow = follow =>
  $.ajax({
    method: "PATCH",
    url: `api/follows/${follow.id}`,
    data: { follow }
  });

export const deleteFollow = follow_id =>
  $.ajax({
    method: "DELETE",
    url: `api/follows/${follow_id}`
  });
