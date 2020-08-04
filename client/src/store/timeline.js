import axios from 'axios'

export default {
  state: {
    tweets: []
  },
  getters: {
    tweets (state) {
      return state.tweets
    }
  },
  mutations: {
    SET_TWEETS (state, data) {
      state.tweets = data
    }
  },
  actions: {
    async getTweets ({ commit }) {
      const response = await axios.get('http://localhost:3000/api/v1')
      commit('SET_TWEETS', response.data)
    }
  }
}
