<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app{
  *{
    box-sizing: border-box;
  }
  width: 100%;
  height: 100%;
  // min-width: 375px;
  &>div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column
  }
}
</style>
