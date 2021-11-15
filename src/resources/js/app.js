require('./bootstrap');

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueToastr from "vue-toastr";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueToastr);

const router = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
});

const store = new Vuex.Store({
    state: {
        // since there is no auth, use the seeded user
        currentUser: 'legermano',
        user: []
    },
    mutations: {
        updateUser(state, user) {
            state.user = user;
        },
        updateUserBackgroundColor(state, backgroundColor) {
            state.user.background_color = backgroundColor;
        },
        updateUserTextColor(state, textColor) {
            state.user.text_color = textColor;
        },
        updateLinks(state, links) {
            state.user.links = links;
        },
        removeFromLinks(state, id) {
            let linkIndex = state.user.links.findIndex(link => link.id == id);
            if(linkIndex !== -1) {
                state.user.links.splice(linkIndex, 1);
            }
        }
    },
    getters: {
        getUserBackgroundColor: state => {
            return state.user.background_color;
        }
    },
    actions: {
        getUserData({commit}, payload) {
            // fetch the current user from the api
            return axios.get('/api/user/'+payload.username)
            .then((response) => {
                commit('updateUser', response.data);
            })
            .catch((error) => console.error(error));
        },
        getUserLinks({commit}, payload) {
            // fetch the links from the api
            return axios.get('/api/user/'+payload.user_id+'/links')
                .then((response) => {
                    commit('updateLinks', response.data);
                })
                .catch((error) => console.error(error));
        }
    }
});

const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getUserData',{
            username: store.state.currentUser
        })
        .then(_ => {})
        .catch((error) => console.error(error))
    },
    mounted() {
        // Set the default positon for the toast notification
        this.$toastr.defaultPosition = "toast-bottom-right";
    }
});
