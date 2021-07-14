<template>
  <div>
    <commonTitle title="榜单" :routeOptions="routeOptions"></commonTitle>
    <div class="top-list">
      <topListItem
        v-for="(val, index) in topList"
        :key="index"
        :topListInfo="val"
      ></topListItem>
    </div>
  </div>
</template>

<script>
import { getTopDetail } from "../api/api";

import topListItem from "./topListItem.vue";
import commonTitle from "./commonTitle.vue";

export default {
  data() {
    return {
      topList: [],
      routeOptions: {
        path: "/rank",
      },
    };
  },
  components: {
    topListItem,
    commonTitle,
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
  box-sizing: border-box;
  display: flex;
  width: 690px;
  height: 472px;
  /* border: 1px solid lightgrey; */
  justify-content: space-around;
  background-color: #f5f5f5;
  background-image: url("../assets/index_bill.png");
  margin: 0 auto;
}
</style>