<template>
  <div id="menu">
    <div class="name">
      {{ forecast.forecast.city.name }},{{ forecast.forecast.city.country }}
    </div>
    <div id="info">
      <div class="info">TEMP</div>
      <hr>
      <div class="info">HUMIDITY</div>
      <hr>
      <div class="info">WIND</div>
      <hr>
      <div class="info">CLOUDS</div>
    </div>
  </div>
</template>

<script>
import AppForecastMenu from '@/components/AppForecastMenu.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Forecast',
  components: {
    AppForecastMenu
  },
  computed: {
    ...mapGetters([
      'forecast'
    ]),
  },
}
</script>

<style lang="less" scoped>
#menu{
  height: 100%;
  padding-bottom: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .name{
    font-size: 40px;
    margin-right: 30px;
  }
}
</style>