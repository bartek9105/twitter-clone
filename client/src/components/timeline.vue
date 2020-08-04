<template>
  <div>
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

export default {
  components: {
    tweet
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
