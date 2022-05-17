import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: []
  },
  getters: {
    movies(state){
      return state.videos;
    }
  },
  mutations: {
    GET_MOVIES(state, payload){
      state.movies = payload
    }
  },
  actions: {
    getMovies({commit}){
      const API_URL = `http://localhost:9999/movie/api/movie/`;

      axios({
        url: API_URL,
        method: 'GET'
      }).then((res) => {
        console.log(res)
        commit('GET_MOVIES', res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
