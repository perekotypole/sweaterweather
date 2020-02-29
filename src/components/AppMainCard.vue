<template>
  <div id="main-card" v-if="info">
    <hr>
    <div class="info">
      <div class="name">TEMP</div>
      <div class="value">{{ Math.round(info.temp.celsuium.number) }}{{ info.temp.celsuium.mark }}</div>
    </div>
    <hr>
    <div class="info">
      <div class="name">FEELS LIKE</div>
      <div class="value">{{ Math.round(info.feel.celsuium.number) }}{{ info.feel.celsuium.mark }}</div>
    </div>
    <hr>
    <div class="info">
      <div class="name">HUMIDITY</div>
      <div class="value">{{ info.humidity.number }}{{ info.humidity.mark }}</div>
    </div>
    <hr>
    <div class="info">
      <div class="name">WIND</div>
      <div class="value">{{ info.wind.kmh.number }}{{ info.wind.kmh.mark }}</div>
    </div>
    <hr>
    <div class="info">
      <div class="name">CLOUDS</div>
      <div class="value">{{ info.clouds.number }}{{ info.clouds.mark }}</div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="less" scoped>
.info{
  width: 70%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}

hr{
  width: 100%;
}
</style>