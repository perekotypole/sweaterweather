<template>
  <div class="card">
    <div class="first">
      <div class="dec date">{{ info.dt_txt.toString().split(' ')[0] }}</div>
      <div class="dec date">{{ info.dt_txt.toString().split(' ')[1].substr(0,5) }}</div>
      <div class="title">{{ info.weather[0].main.toString().toUpperCase() }}</div>
      <div class="dec opt">{{ info.weather[0].description.toString().toUpperCase() }}</div>
    </div>
    <div class="second">
      <div class="info temp">{{ Math.round(info.main.temp - 273.15) }}°C</div>
      <hr>
      <div class="info hum">{{info.main.humidity}}%</div>
      <hr>
      <div class="info wind">{{ Math.round(info.wind.speed * 3.6) }}KM/H</div>
      <hr>
      <div class="info cloud">{{info.clouds.all}}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForecastItem',
  props:{
    info: Object
  }
}
</script>

<style lang="less" scoped>
.card{
  text-align: center;

  .title{
    font-size: 100px;
    margin: 0 25px;
  }

  .first{
    margin-bottom: 50px;

    .dec{
      font-size: 30px;
    }

    .opt{
      margin-top: -0.5em;
    }
  }
}
</style>