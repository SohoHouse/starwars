<template>
  <h1>{{ name }}</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch ({ store, params }) {
    await store.dispatch('GET_CHARACTER', params.id)
  },
  computed: {
    ...mapState({
      name: state => state.character.name
    })
  }
}
</script>

<style>

</style>
