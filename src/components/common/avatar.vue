<template>
  <div class="avatar" :style="styleObj">
    <img class="ablumImg" :src="imgUrl" alt="图片加载失败" />
    <span class="spanCover" :style="bgStyle"></span>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    width: Number,
    bgWidth: Number,
    type: Number,
    bgTop: Number,
    bgLeft: Number,
  },
  computed: {
    styleObj() {
      return {
        width: this.width + "px",
        height: this.width + "px",
      };
    },
    bgStyle() {
      return {
        width: this.bgWidth + "px",
        height: this.bgWidth + "px",
        top: this.bgTop + "px",
        left: this.bgLeft + "px",
      };
    },
  },
};
</script>

<style scoped>
.ablumImg {
  width: 100%;
  height: 100%;
}

.avatar {
  position: relative;
  margin-right: 50px;
}

.spanCover {
  position: absolute;
  left: -4px;
  top: 4px;
  background-image: url("../..//assets/coverall.png");
  background-repeat: no-repeat;
  background-position: 0px -1285px;
}
</style>