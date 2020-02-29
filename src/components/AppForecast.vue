<template>
  <div id="forecast">
    <div class="cards">
      <app-forecast-item
        class="cardf"
        v-for="info in forecast.forecast.list"
        :key="info.dn"
        :info="info"/>
    </div>
  </div>
</template>

<script>
import AppForecastItem from '@/components/AppForecastItem.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Forecast',
  components: {
    AppForecastItem
  },
  computed: {
    ...mapGetters([
      'forecast'
    ]),
  },
}
</script>

<style lang="less" scoped>
.cards{
  display: flex;
  overflow-y: scroll; 
}

::-webkit-scrollbar {
  width: 0;
  height: 7px;
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: var(--color-bg-optional);
  border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.61);
}
</style>