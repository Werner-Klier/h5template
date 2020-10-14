// 进入首页的第一次推送推荐人
<template>
  <div class="advertising flexCenter">
    <div class="layer">
      <img class="big" src="@/assets/imgs/tuijianren.png" alt />
      <div class="title">欢迎进入拍拍</div>
      <van-image
        class="acatar"
        round
        width="54px"
        height="54px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="user">拍拍用户：839482040233</div>
      <input class="sponsor" placeholder="请输入推荐人ID（必填）" type="text" />
      <img class="enter shadow" src="@/assets/imgs/enter.png" alt />
      <div @click="enter" class="enter flexCenter">
        <span class="subok">确认</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    enter() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="less" scoped>
.advertising {
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  background: rgba(69, 69, 70, 0.2);
  .layer {
    width: 311px;
    height: 361px;
    position: relative;
    .big {
      width: 100%;
      height: 100%;
    }
    .acatar {
      position: absolute;
      left: 133px;
      top: 151px;
      margin: 0 auto;
    }
    .title {
      position: absolute;
      top: 123px;
      left: 122px;
      font-size: 12px;
      font-weight: 500;
      color: #f8944c;
    }
    .user {
      position: absolute;
      left: 86px;
      top: 236px;
      font-size: 10px;
      font-weight: bold;
      transform: scale(0.9);
      color: #ffffff;
      opacity: 0.8;
    }
    .sponsor {
      position: absolute;
      height: 25px;
      width: 145px;
      left: 88px;
      top: 255px;
      background: #ec542e;
      border-radius: 4px;
      font-size: 12px;
      color: #ffffff;
      opacity: 0.8;
      text-indent: 12px;
      &::-webkit-input-placeholder {
        color: #ffffff;
        opacity: 0.4;
      }
    }
    .enter {
      position: absolute;
      left: 69px;
      top: 299px;
      width: 183px;
      height: 49px;
      background: url("../assets/imgs/enter.png") no-repeat center;
      background-size: cover;
      &:active {
        margin-top: 2px;
        margin-bottom: 2px;
      }
    }
    .shadow {
      opacity: 0.4;
      top: 291px;
      left: 67px;
      border-radius: 21px;
      box-shadow: 0 0 8px 4px #f05c2f;
    }
    .subok {
      font-size: 21px;
      font-weight: bold;
      color: #fb690a;
    }
  }
}
</style>