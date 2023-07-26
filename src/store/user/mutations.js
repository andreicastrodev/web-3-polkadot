export default {
  loginUser(state, payload) {
    console.log(payload);
    state.isLoggedin = payload;
  },
};
