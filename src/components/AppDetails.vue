<template>
  <div id="result" v-if="currentWeather">
    <app-main-card
      id="information"
      :info="currentWeather">
    </app-main-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppMainCard from './AppMainCard.vue'

export default {
  name: 'AppDetails',
  components: {
    AppMainCard
  },
  computed: {
    ...mapGetters([
      'currentWeather'
    ])
  }
}
</script>

<style lang="less" scoped>
#result{
  float: right;
  width: 50%;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  #information{
    width: 100%;
  }
}
</style>
