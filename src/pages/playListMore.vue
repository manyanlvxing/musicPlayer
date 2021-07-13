<template>
  <div>
    <loading v-if="playList.length == 0"></loading>
    <div class="playListMore">
      <playListItem
        v-for="(val, index) in playList"
        :key="index"
        :playListInfo="val"
      ></playListItem>
    </div>
  </div>
</template>

<script>
import { getTopPlayList } from "../api/api";

import playListItem from "../components/playList/playListItem.vue";
import loading from "../components/common/loading.vue";

export default {
  data() {
    return {
      playList: [],
    };
  },
  components: {
    loading,
    playListItem,
  },
  created() {
    getTopPlayList().then((res) => {
      console.log("getTopPlayList", res);
      this.playList = res.data.playlists;
    });
  },
};
</script>

<style scoped>
.playListMore {
  height: 1664px;
  width: 900px;
  display: flex;
  flex-wrap: wrap;
}
</style>