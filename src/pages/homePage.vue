<template>
  <div class="center">
    <div class="content">
      <banner v-if="bannerUrls.length > 0" :imgUrls="bannerUrls"></banner>
      <br />
      <newDish></newDish>
    </div>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import newDish from "../components/newDish.vue";

import { getBanner } from "../api/api";

export default {
  components: {
    banner,
    newDish,
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
  width: 700px;
}

.content {
  width: 100%;
}


</style>