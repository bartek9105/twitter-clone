<template>
  <div>
    {{ tweet.email }}
    {{ tweet.body }}
  </div>
</template>

<script>
export default {
  props: {
    tweet: Object
  }
}
</script>

<style>

</style>
