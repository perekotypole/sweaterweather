<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html,
body {
  height: 100vh;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --color-bg-main: linear-gradient(35deg, #404040 20%, #8B6F6F);
  --color-bg-optional: rgba(255, 255, 255, 0.5);

  --color-font-main: #ffffff;
  --color-font-optional: rgba(255, 255, 255, 0.5);

  --size-font-title: 120px;
  --size-font-main: 40px;
  --size-font-optional: 20px;
}

#app {
  height: 100%;
  width: 100%;
  padding: 40px 60px;
  background:  var(--color-bg-main) no-repeat;
  font-family: 'Microsoft YaHei UI Light', sans-serif;

  a {
    color: var(--color-font-main);
    text-decoration: none;
  }

  hr{
    border: 1px solid white;
  }
}
</style>
