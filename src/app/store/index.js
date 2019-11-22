import Vuex from 'vuex'

import axios from 'axios'
// import myModule from './my-module'

const createStore = () =>
  new Vuex.Store({
    state: {
      characters: [],
      character: []
    },
    actions: {
      async GET_CHARACTERS ({ commit }) {
        const { data } = await axios.get('http://localhost:3000/api/characters')
        commit('SAVE_CHARACTERS', data)
      },
      async GET_CHARACTER ({ commit }, id) {
        const { data } = await axios.get(`http://localhost:3000/api/characters/${id}`)
        commit('SAVE_CHARACTER', data)
      }
    },
    mutations: {
      SAVE_CHARACTERS (state, payload) {
        state.characters = payload
      },
      SAVE_CHARACTER (state, payload) {
        state.character = payload
      }
    },
    modules: {
      // myModule: {
      //   namespaced: true,
      //   ...myModule
      // }
    }
  })

export default createStore
