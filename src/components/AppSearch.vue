<template>
  <div class="search">
    <input class="input" v-model="query" placeholder="location" @keyup.enter="$router.push(`/weather/current/${query}`)"/>
    <div class="icon" @click="$router.push(`/weather/current/${query}`)">
      <font-awesome-icon icon="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data() {
    return {
      query: ''
    }
  }
}
</script>

<style scoped lang="less">
.search{
  margin: 0 auto;
  border-radius: 30px;
  background: var(--color-bg-optional);
  width: 100%;
  height: 2.5em;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: --size-font-optional;
  input{
    flex-grow: 1;
    border: none;
    background: none;
    outline: none;
    height: 40px;
    color: var(--color-font-main);
    font-size: inherit;
  }
  input::placeholder{//всередині не работає...розберись
    color: var(--color-font-optional);
  }
  .icon{
    color: var(--color-font-main);
    :hover{
      cursor: pointer;
    }
  }
}



</style>
