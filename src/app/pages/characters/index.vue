<template>
<div>
  <h1>Characters</h1>
  <input type="text" v-model="searchInput"/>
  <div v-for="character in characterList"
        :key="character.id">
        <nuxt-link :to="{ name: 'characters-id', params: { id: character.id }}">{{ character.name }}</nuxt-link>
  </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      searchInput: '',
      characterList: []
    }
  },
  watch: {
    searchInput (newVal) {
      if (newVal !== '') {
        this.getList()
      } else {
        this.characterList = this.characters
      }
    }
  },
  async fetch ({ store }) {
    await store.dispatch('GET_CHARACTERS')
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  methods: {
    getList () {
      this.characterList = this.characters.filter(character => character.name.toLowerCase().includes(this.searchInput.toLowerCase()))
    }
  }
}
</script>

<style>

</style>
