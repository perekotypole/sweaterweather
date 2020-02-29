<template>
  <div id="forecast">
    <div id="content">
      <app-forecast-menu id="menu"/>
      <app-forecast id="cards"/>
    </div>
    <router-link 
      class="button"
      :to="{ path: `../../weather/current/${$route.params.name}`}">
        <font-awesome-icon icon="arrow-left" />
        Страшно, вирубай
    </router-link>
  </div>
</template>

<script>
import AppForecastMenu from '@/components/AppForecastMenu.vue'
import AppForecast from '@/components/AppForecast.vue'

import { mapActions } from 'vuex'

export default {
  name: 'ForecastMenu',
  components: {
    AppForecastMenu,
    AppForecast
  },
  watch: {
    $route: 'featch'
  },
  methods: {
    ...mapActions([
      'searchF'
    ]),
    featch() {
      this.searchF(this.$route.params.name)
    }
  },
  created() {
    this.featch()
  },
}
</script>

<style lang="less" scoped>
#forecast{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-font-main);

  #content{
  margin-bottom: 75px;

    #menu{
      float: left;
    }
  }

  .button{
    align-self:flex-start;
    border-radius: 30px;
    background: var(--color-bg-optional);
    font-size: var(--size-font-optional);
    padding: 10px 30px;
  }
}
</style>

<style lang="less">
.info{
  font-size: 30px;
  margin: 15px 0;
}
</style>