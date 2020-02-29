<template>
  <div class="home">
      <div id="title">Що там по погоді?</div>
      <app-search/>
  </div>
</template>

<script>
import AppSearch from '@/components/AppSearch.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    AppSearch
  },
  beforeRouteLeave (to, from, next) {
    this.searchLoc(to.params.name)
    next()
  },
  methods: {
    ...mapActions([
      'searchLoc'
    ]),
  },
  
}
</script>

<style lang="less" scoped>
.home{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-font-main);
  #title{
    font-size: var(--size-font-title);
    margin-bottom: 50px;
  }
}
</style>
