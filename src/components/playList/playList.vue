<template>
  <div>
    <commonTitle title="热门推荐" :routeOptions="playListOptions"></commonTitle>
    <div class="playListContent">
      <playListItem
        v-for="(val, index) in playLists"
        :key="index"
        :playListInfo="val"
      ></playListItem>
    </div>
  </div>
</template>

<script>
import commonTitle from "../common/commonTitle.vue";
import playListItem from "./playListItem.vue";

import { getPlayerList } from "../../api/api";
export default {
  data() {
    return {
      playLists: [],
      playListOptions: {
        path: "/more/playListMore",
      },
    };
  },
  components: {
    commonTitle,
    playListItem,
  },
  created() {
    getPlayerList(8).then((res) => {
      console.log("getPlayerList", res);
      this.playLists = res.data.result;
    });
  },
};
</script>

<style scoped>
.playListContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 468px;
}
</style>