<template>
  <div>
    <form @submit.prevent="postTweet">
        <input type="text" v-model="tweetBody">
        <button type="Submit">Tweet</button>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tweetBody: null
    }
  },
  methods: {
    postTweet () {
      this.$store.dispatch('postTweet', this.tweetBody)
    }
  }
}
</script>

<style>

</style>
