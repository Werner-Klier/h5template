<template>
  <div class="home">
    <div class="searchbox">
      <div class="search">
        <input type="text" placeholder="输入商品关键词或用户名" />
        <img src="../assets/imgs/search.png" alt />
      </div>
      <img class="message" src="../assets/imgs/message.png" alt />
    </div>
    <div class="mian">
      <div class="headbg"></div>
      <div class="content">
        <!-- banner区域的盒子 -->
        <div class="firstbox">
          <MySwiper class="banner"/>
          <van-grid class="vangrid" :border="false">
            <van-grid-item :icon="require('../assets/imgs/paipai.png')" text="拍拍" />
            <van-grid-item :icon="require('../assets/imgs/shangcheng.png')" text="商城" />
            <van-grid-item :icon="require('../assets/imgs/fankui.png')" text="反馈" />
            <van-grid-item :icon="require('../assets/imgs/wode.png')" text="我的" />
          </van-grid>
          <div class="notice flexBetween flexAlign">
            <img class="laba" src="../assets/imgs/laba.png" alt />
            <div class="desc">
              <h1>公告</h1>
              <p>拍拍成为最大生活电商平台</p>
            </div>
            <PubButton class="pubbutton" text="详情"></PubButton>
          </div>
        </div>
        <!-- 第二列盒子 -->
        <div class="secondbox">
          <!-- 限时拍 -->
          <div class="head flexBetween">
            <span class="title">拍你想拍</span>
            <span class="desc">意想不到的惊喜</span>
            <span class="more">更多拍卖</span>
          </div>
          <div class="type flexAlign">
            <img src="../assets/imgs/xianshipai.png" alt />
            <div class="time">
              <div class="timeitem flexCenter">00</div>:
              <div class="timeitem flexCenter">10</div>:
              <div class="timeitem flexCenter">19</div>
            </div>
          </div>
          <div class="shopcontent flexAlign">
            <div class="img"></div>
            <div class="shop flexcolumn">
              <div class="name">这里是商品名称</div>
              <div class="desc">商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍</div>
              <div class="foot flexBetween">
                <div class="left">
                  <div class="price flexBetween">
                    <span class="unit">XAG</span>
                    <span class="newprice">39.9</span>
                  </div>
                  <s class="oldprice">$ 749</s>
                </div>
                <PubButton background="linear-gradient(89deg, #EA593F 0%, #EE7F59 100%)" text="去抢拍"></PubButton>
              </div>
            </div>
          </div>
          <!-- 社群拍 -->
          <div class="type shequn flexAlign">
            <img src="../assets/imgs/shequnpai.png" alt />
            <PubButton
              width="89px"
              height="14px"
              fontSize="12px"
              background="linear-gradient(89deg, #F5BB45 0%, #FFD37D 100%)"
              text="指定会员专场"
              class="pubbutton"
              radius="7px"
            ></PubButton>
          </div>
          <div class="shopcontent flexAlign">
            <div class="img"></div>
            <div class="shop flexcolumn">
              <div class="name">这里是商品名称</div>
              <div class="desc">商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍</div>
              <div class="foot flexBetween">
                <div class="left">
                  <div class="price flexBetween">
                    <span class="unit">XAG</span>
                    <span class="newprice">39.9</span>
                  </div>
                  <s class="oldprice">$ 749</s>
                </div>
                <PubButton background="linear-gradient(89deg, #EA593F 0%, #EE7F59 100%)" text="去抢拍"></PubButton>
              </div>
            </div>
          </div>
        </div>
        <!-- 今日伤心 -->
        <div class="thirdbox">
          <div class="bg">
            <img class="gift" src="../assets/imgs/gift.png" alt />
            <div class="top">
              <span class="type">今日上新</span>
              <span class="more">更多新品</span>
            </div>
          </div>
          <div class="products">
            <div class="product">
              <img src="../assets/imgs/product.png" alt />
              <div class="context">
                <p class="name">这里是商品名称</p>
                <p class="desc">商品介绍</p>
                <div class="price">
                  <span class="unit">$</span>
                  <span class="num">39.9</span>
                </div>
              </div>
            </div>
            <div class="product">
              <img src="../assets/imgs/product.png" alt />
              <div class="context">
                <p class="name">这里是商品名称</p>
                <p class="desc">商品介绍</p>
                <div class="price">
                  <span class="unit">$</span>
                  <span class="num">39.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 优选好物 -->
        <div class="goods">
          
        </div>
      </div>
    </div>
    <Recommend class="meng" v-if="isShow" @close="close"></Recommend>
  </div>
</template>

<script>
import Recommend from "@/components/recommend";
import MySwiper from "@/components/mySwiper"
export default {
  name: "Home",
  components: {
    Recommend,MySwiper
  },
  data() {
    return {
      isShow: true,
      searchValue: "",
    };
  },
  methods: {
    close() {
      this.isShow = false;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f6f7fb;
  .searchbox {
    height: 58px;
    background: linear-gradient(90deg, #e9593f, #ed7e59);
    padding: 0 12px;
    align-items: center;
    display: flex;
    .search {
      position: relative;
      flex: 1;
      input {
        height: 32px;
        width: 100%;
        background: #ffffff;
        border-radius: 16px;
        text-indent: 35px;
        color: #333333;
        font-size: 13px;
      }
      img {
        position: absolute;
        width: 15px;
        height: 14px;
        left: 10px;
        top: 9px;
      }
    }
    .message {
      width: 17px;
      height: 17px;
      margin-left: 8px;
    }
  }
  .mian {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    margin-top: -1px;
    .headbg {
      width: 100%;
      height: 136px;
      transform: scaleX(1.1);
      background: linear-gradient(90deg, #e9593f, #ed7e59);
      border-radius: 0 0 28px 28px;
    }
    .content {
      width: 100%;
      height: 1800px;
      padding: 0 12px;
      position: absolute;
      top: 14px;
      .firstbox {
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0px 2px 4px 0px rgba(196, 196, 196, 0.35);
        background: #fff;
        .banner {
          box-shadow: 0px 2px 4px 0px rgba(196, 196, 196, 0.35);
        }
        .vangrid {
          /deep/ .van-grid-item {
            .van-grid-item__content {
              .van-icon {
                font-size: 20px;
              }
              .van-grid-item__text {
                font-size: 14px;
                color: #474747;
              }
            }
          }
        }
        .notice {
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          padding: 13px 15px 13px 5px;
          .laba {
            width: 50px;
            height: 50px;
          }
          .desc {
            flex: 1;
            margin-left: 8px;
            h1 {
              font-size: 14px;
              font-weight: bold;
              color: #000000;
              line-height: 24px;
            }
            p {
              font-size: 12px;
              font-weight: 500;
              color: #484848;
              line-height: 24px;
              opacity: 0.5;
            }
          }
          .pubbutton {
            margin-left: -10px;
          }
        }
      }
      .secondbox {
        background: #ffffff;
        box-shadow: 0px 2px 4px 0px rgba(196, 196, 196, 0.35);
        border-radius: 5px;
        padding: 15px 15px 15px 8px;
        margin-top: 7px;
        .head {
          .title {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #000000;
          }
          .desc {
            flex: 1;
            margin-left: 13px;
          }
          .desc,
          .more {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #484848;
            opacity: 0.5;
          }
          .more {
            margin-right: 10px;
            &:active {
              font-size: 13px;
            }
          }
        }
        .type {
          margin-top: 28px;
          img {
            width: 43px;
            height: 13px;
          }
          .time {
            margin-left: 6px;
            display: flex;
            color: #ec4f48;
            .timeitem {
              width: 15px;
              height: 17px;
              background: linear-gradient(0deg, #ec6351 0%, #e74732 100%);
              border-radius: 3px;
              font-size: 12px;
              color: #fff;
            }
          }
          .pubbutton {
            margin-left: 6px;
          }
        }
        .shopcontent {
          margin-top: 17px;
          .img {
            width: 113px;
            height: 110px;
            background: royalblue;
            box-shadow: 0px 1px 4px 0px rgba(196, 196, 196, 0.35);
            border-radius: 8px;
          }
          .shop {
            flex: 1;
            margin-left: 13px;
            justify-content: space-between;
            .name {
              font-size: 12px;
              font-weight: 500;
              color: #1a1a1a;
            }
            .desc {
              font-size: 11px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.5);
              margin-top: 16px;
            }
            .foot {
              margin-top: 7px;
              .left {
                display: flex;
                .price {
                  font-size: 14px;
                  font-weight: bold;
                  color: #ec4f48;
                  align-self: flex-end;
                  margin-left: -10px;
                  .unit {
                    color: #ec4f48;
                    display: block;
                    transform: scale(0.6);
                    align-self: flex-end;
                    transform-origin: right bottom;
                  }
                }
                .oldprice {
                  margin-left: 9px;
                  align-self: flex-end;
                  display: inline-block;
                  transform: scale(0.7);
                  transform-origin: left bottom;
                }
              }
            }
          }
        }
        .shequn {
          margin-top: 19px;
        }
      }
      .thirdbox {
        background: #ffffff;
        border-radius: 5px;
        margin-top: 6px;
        padding-bottom: 11px;
        .bg {
          height: 100px;
          background: linear-gradient(180deg, #ea593f, #ee7f59);
          border-radius: 5px;
          position: relative;
          .gift {
            width: 147px;
            height: 130px;
            position: absolute;
            top: -13px;
            left: -8px;
          }
          .top {
            position: absolute;
            left: 147px;
            top: 20px;
            .type {
              font-size: 14px;
              font-weight: bold;
              color: #ffffff;
            }
            .more {
              margin-left: 75px;
              font-size: 12px;
              font-weight: 500;
              color: #ffffff;
              opacity: 0.5;
            }
          }
        }
        .products {
          display: flex;
          padding: 0 6px;
          position: sticky;
          margin-top: -34px;
          .product:not(:first-of-type) {
            margin-left: 4px;
          }
          .product {
            flex: 1;
            box-shadow: 0px 1px 4px 0px rgba(196, 196, 196, 0.35);
            border-radius: 8px;
            overflow: hidden;
            img {
              width: 100%;
              height: 156px;
            }
            .context {
              padding: 7px 5px 10px 5px;
              .name {
                font-size: 12px;
                color: #1a1a1a;
              }
              .desc {
                font-size: 11px;
                transform: scale3d(0.8);
                color: #333333;
                margin: 7px 0;
              }
              .price {
                color: #ec4f48;
                .unit {
                  font-size: 11px;
                  display: inline-block;
                  transform: scale3d(0.8);
                }
                .num {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
  .meng {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
  }
}
</style>
