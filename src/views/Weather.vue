<template>
  <div id="weather">
    <app-search/>
    <router-view class="content"/>
  </div>
</template>

<script>
import AppSearch from '@/components/AppSearch.vue'

export default {
  name: 'Weather',
  components: {
    AppSearch
  },
}
</script>

<style lang="less" scoped>
#weather{
  height: 100%;
  .content{
    height: 100%;
  }
}
</style>