
import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
    modules: {
        numbers: counterModule, // this merge the "other store" with this one (but its more organized), you can have as many modules as you want
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
});

export default store;