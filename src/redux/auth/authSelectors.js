const selectCurrentUser = (state) => state.auth.user;
const selectUserName = (state) => state.auth.user.name;
const isLoggidIn = (state) => state.auth.isLoggedIn;

const authSelectors = {
  selectCurrentUser,
  isLoggidIn,
  selectUserName,
};

export default authSelectors;
