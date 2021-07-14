<template>
  <div class="rankHeader">
    <loading v-if="isLoading"></loading>
    <div v-if="!isLoading">
      <img :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
import loading from "../common/loading.vue";

export default {
  props: ["rankInfo", "isLoading"],
  components: {
    loading,
  },
  computed: {
    imgUrl() {
      return this.rankInfo.playlist.coverImgUrl;
    },
  },
};
</script>

<style scoped>
.rankHeader {
  height: 200px;
  width: 100%;
}

img {
  width: 150px;
  height: 150px;
}
</style>