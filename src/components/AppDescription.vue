<template>
  <div id="description" v-if="location">
    <div id="block">
      <div>{{location.name}},{{location.country}}</div>
      <div class="weather">{{location.weather.toUpperCase()}}</div>
      <div>{{location.description.toUpperCase()}}</div>
    </div>
    <router-link 
      class="button"
      :to="{ path: `../../weather/forecast/${$route.params.name}`}">
        Дізнатись майбутнє
        <font-awesome-icon icon="arrow-right" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppDescription',
  computed: {
    ...mapGetters([
      'location'
    ])
  },
}
</script>

<style lang="less" scoped>
#description{
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #block{
    text-align: center;
    margin-bottom: 120px;

    .weather{
      font-size: var(--size-font-title);
      margin-top: 30px;
    }
  }

  .button{
    border-radius: 30px;
    background: var(--color-bg-optional);
    font-size: var(--size-font-optional);
    padding: 10px 30px;
  }
}
</style>