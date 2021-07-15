<template>
  <div class="btns" @click="$emit(evtName)">
    <div class="btn-play">播放</div>
    <div class="btn-rightHalf"></div>
    <div class="icon-type-play"></div>
  </div>
</template>

<script>
export default {
  props: ["evtName"],
};
</script>

<style scoped>
.btn-play {
  float: left;
  background-position: 0 -387px;
  background-image: url("../../assets/button2.png");
  width: 61px;
  height: 31px;
  /* color: white; */
  /* font-size: 20px; */
  /* line-height: 31; */
  /* font-size: 12px; */
  text-align: right;
  color: white;
  font-size: 12px;
  padding-right: 8px;
  padding-top: 6px;
  box-sizing: border-box;
}

.btn-rightHalf {
  float: left;
  background-position: 0 -1588px;
  width: 31px;
  height: 31px;
  background-image: url("../../assets/button2.png");
}

.btns {
  position: relative;
}

.icon-type-play {
  position: absolute;
  width: 20px;
  height: 18px;
  top: 5px;
  left: 5px;
  background-position: 0 -1622px;
  background-image: url("../../assets/button2.png");
}
</style>