import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      userAuth: null,
      userProvider: null,
      userWeb3AuthInfo: null,
    };
  },
  mutations,
  actions,
  getters,
};
