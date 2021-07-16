<template>
  <div class="title-container">
    <div class="common-title">{{ title }}</div>
    <span @click="onClickMore" class="span-more">更多</span>
  </div>
</template>

<script>
export default {
  props: ["title", "routeOptions"],
  methods: {
    onClickMore() {
      this.$router.push({
        path: this.routeOptions.path,
      });
    },
  },
};
</script>

<style lang='less' scoped>
@import url("../../css/bg");

.title-container {
  position: relative;
}

.common-title {
  width: 645px;
  height: 33px;
  // font-size: 20px;

  text-align: start;
  padding: 0 10px 0 34px;
  margin: 20px 0 20px 20px;
  background-repeat: no-repeat;
  border-bottom: 2px solid #colors[red];
  background-position: -225px -156px;
  // background-image: url("../assets/index.png");
  font-size: #fontSize[large];
  background-image: #bgUrls[bg-index];
}

.span-more {
  position: absolute;
  float: right;
  font-size: 12px;
  right: 20px;
  top: 10px;
  color: #colors[lightblue];
}
</style>