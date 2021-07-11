<template>
  <div class="center">
    <div class="content">
      <banner v-if="bannerUrls.length > 0" :imgUrls="bannerUrls"></banner>
      <playList></playList>
      <newDish></newDish>
      <topList></topList>
    </div>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import playList from "../components/playList/playList.vue";
import newDish from "../components/newDish.vue";
import topList from "../components/topList.vue";

import { getBanner } from "../api/api";

export default {
  components: {
    banner,
    newDish,
    topList,
    playList,
  },
  data() {
    return {
      bannerUrls: [],
    };
  },
  created() {
    getBanner().then((res) => {
      this.bannerUrls = res.data.banners;
    });
  },
};
</script>

<style scoped>
.center {
  width: 730px;
  border: 1px solid #d3d3d3;
}

.content {
  width: 100%;
}
</style>