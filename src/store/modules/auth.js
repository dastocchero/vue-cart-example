//store/modules/auth.js

import axios from 'axios';
const state = {
    user: null,
    products: null,
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StateProducts: state => state.products,
    StateUser: state => state.user,
};
const actions = {
    async Register({dispatch}, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('name', form.name)
        UserForm.append('email', form.email)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
      },
      async LogIn({commit}, User) {
        await axios.post('login', User)
        await commit('setUser', User.get('email'))
      },
      async CreateProduct({dispatch}, product) {
        await axios.post('product', product)
        await dispatch('GetProducts')
      },
      async GetProducts({ commit }){
        let response = await axios.get('products')
        commit('setProducts', response.data)
      },
      async LogOut({commit}){
        let user = null
        commit('logout', user)
      }
                              
};
const mutations = {
    setUser(state, email){
        state.user = email
    },
    setProducts(state, products){
        state.products = products
    },
    LogOut(state){
        state.user = null
        state.products = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
