<template>
  <div class="navWrap">
    <ul class="clear-fix">
      <navSpanItem
        v-for="(val, index) in titles"
        :title="val"
        :key="index+1"
        :path="path[index]"
      ></navSpanItem>
    </ul>
  </div>
</template>

<script>
import navSpanItem from "./navSpanItem.vue";

export default {
  components: {
    navSpanItem,
  },
  data() {
    return {
      titles: ["推荐", "排行榜", "歌单", "主播电台", "歌手", "新碟上架"],
      path: ["/", "/rank", "/more/playListMore", "", "", "/more/newDishesMore"],
    };
  },
};
</script>

<style scoped>
.navWrap {
  background-color: #c20c0c;
  border: 1px solid #a40011;
  height: 34px;
}
ul {
  float: left;
  height: 34px;
  width: 564px;
  padding-left: 30%;
}
</style>