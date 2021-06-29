<template>
  <div class="center">
    <div class="content">
      <banner v-if="bannerUrls.length > 0" :imgUrls="bannerUrls"></banner>
    </div>
  </div>
</template>

<script>
import banner from "./banner.vue";
import {getBanner} from '../api/api';


export default {
  components: {
    banner,
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

<style>
.center {
  float: left;
  width: 100%;
  height: 300px;
  background-color: lightgreen;
}

.content {
  margin: 0 100px;
  height: 300px;
  background-color: lightslategray;
}
</style>