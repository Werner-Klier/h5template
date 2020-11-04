<template>
  <div id="app">
    <router-view />
    <Loading v-if="$store.state.LOADING"></Loading>
  </div>
</template>

<script>
import Loading from "@/components/loading"
export default {
  components:{
    Loading
  }
};
</script>

<style lang="less">
#app {
  * {
    box-sizing: border-box;
  }
  width: 100%;
  height: 100%;
  // min-width: 375px;
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
