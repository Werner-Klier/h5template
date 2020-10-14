<template>
  <div class="myswiper">
    <van-swipe
      style="height: 150px;"
      width="100%"
      height="150"
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>
        <img src="@/assets/imgs/banner.png" alt class="banner" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/imgs/banner.png" alt class="banner" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/imgs/banner.png" alt class="banner" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my-swipe {
  /deep/ .van-swipe-item {
    border-radius: 5px;
    text-align: center;
    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
  }
  /deep/ .van-swipe__indicators {
    left: auto;
    right: 0;
  }
}
</style>