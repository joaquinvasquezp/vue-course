import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
    // state inside of a module its treated as local to the module, you can't see the sate isLoggedIn, not in this module
    // there is a way to obtain the value with rootState or rootGetters
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters,
    namespaced: true, // this tell vuex that the entire store detach from the main one,
    // the only way to work with things inside this store its with the module name defined (numbers, line 55)
};