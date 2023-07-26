import { createStore } from "vuex";
import userModule from './user/index.js';

const store = createStore({
    modules: {
        user: userModule
    }
});


export default store;