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
    },
    ADD_TWEET (state, data) {
      state.tweets.push(data)
    }
  },
  actions: {
    async getTweets ({ commit }) {
      const response = await axios.get('http://localhost:3000/api/v1')
      commit('SET_TWEETS', response.data)
    },
    async postTweet ({ commit }, data) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1', {
          tweetBody: data
        })
        commit('ADD_TWEET', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
