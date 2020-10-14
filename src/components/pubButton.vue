<template>
  <div
    class="pbutton clickbg flexCenter"
    :style="{width,height,background,'border-radius':radius,'font-size':fontSize,color}"
  >{{text}}</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "72px",
    },
    height: {
      type: String,
      default: "28px",
    },
    background: {
      type: String,
      default: "#F5BB45",
    },
    text: {
      type: String,
      default: "",
    },
    radius: {
      type: String,
      default: "4px",
    },
    fontSize:{
        type: String,
      default: "13px",
    },
    color:{
        type: String,
      default: "#fff",
    }
  },
};
</script>

<style lang="less" scoped>
.pbutton {
}
</style>