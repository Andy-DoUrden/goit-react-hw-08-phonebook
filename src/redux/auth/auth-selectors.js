export const selectIsLoggedIn = state => state.authorization.isLoggedIn;

export const selectUser = state => state.authorization.user;

export const selectIsRefreshing = state => state.authorization.IsRefreshing;

export const selectUserName = state => state.authorization.user.name;
