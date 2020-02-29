<template>
  <div id='nf'>
    <router-link :to="{path: '/'}">
      <img src="../../assets/not_found.gif" alt="not found">
      <div class="title">ПОЛОМИВ</div>
      <div class="help">краще просто тикни на Бейбі Йоду</div>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
#nf{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img{
    border-radius: 50%;
    height: 300px;
  }

  .title{
    font-size: 120px;
  }

  .help{
    margin: -1em;
    font-size: 30px;
  }
}

</style>