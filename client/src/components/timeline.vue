<template>
  <div>
      <div v-for="tweet in tweets" :key="tweet.id">{{ tweet }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
