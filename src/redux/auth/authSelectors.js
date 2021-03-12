export const getIsAuth = state => Boolean(state.auth.token);

export const getUserName = state => state.auth.user.name;
