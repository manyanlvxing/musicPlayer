<template>
  <div class="header">
    <navHeader></navHeader>
    <navWrap></navWrap>
  </div>
</template>

<script>
import navWrap from "./nav/navWrap.vue";
import navHeader from "./nav/navHeader.vue";

export default {
  name: "base-head",
  components: {
    navWrap,
    navHeader
  },
  data() {
    return {
      titls: ["推荐", "排行榜", "歌单", "主播电台", "歌手", "新碟上架"],
    };
  },
};
</script>

<style scoped>
.header {
  height: 34px;
  /* background-color: #c20c0c;
  border: 1px solid #a40011; */
}
</style>

