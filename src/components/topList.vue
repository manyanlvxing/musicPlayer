<template>
  <div class="top-list">
    <topListItem
      v-for="(val, index) in topList"
      :key="index"
      :topListInfo="val"
    ></topListItem>
  </div>
</template>

<script>
import { getTopDetail } from "../api/api";

import topListItem from "./topListItem.vue";

export default {
  data() {
    return {
      topList: [],
    };
  },
  components: {
    topListItem,
  },
  created() {
    getTopDetail().then((res) => {
      console.log("getTopDetail", res);
      //   getPlayerListDetail(res.data.list[0].id).then((res) => {
      //     console.log("getPlayerListDetail", res);
      //   });
      this.topList = res.data.list.slice(0, 3);
    });
  },
};
</script>

<style scoped>
.top-list {
  width: 100%;
  height: 400px;
  border: 1px solid black;
}
</style>