<template>
  <div>
    <tweetForm />
    <tweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tweet from './tweet'
import tweetForm from './tweetForm'

export default {
  components: {
    tweet,
    tweetForm
  },
  methods: {
    ...mapActions(['getTweets'])
  },
  computed: {
    ...mapGetters(['tweets'])
  },
  mounted () {
    this.getTweets()
  }
}
</script>

<style>

</style>
