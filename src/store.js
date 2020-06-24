import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {},
    state: {
        user: {id:''},
    },
    getters: {
        getUserInfo: state => {
            return state.user;
        },
    },
    mutations: {
        SET_USER_INFO: (state, user) => {
            state.user = user;
        },
    },
    actions: {},
});

export default store