<template>
  <div id="current">
    <app-description/>
    <app-details/>
  </div>
</template>

<script>
import AppDetails from '@/components/AppDetails.vue'
import AppDescription from '@/components/AppDescription.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Weather',
  components: {
    AppDetails,
    AppDescription
  },
  watch: {
    $route: 'featch'
  },
  methods: {
    ...mapActions([
      'searchLoc'
    ]),
    featch() {
      this.searchLoc(this.$route.params.name)
    }
  },
  created() {
    this.featch()
  },
}
</script>

<style scoped>
#current{
  color: var(--color-font-main);
  font-size: var(--size-font-main);
}
</style>