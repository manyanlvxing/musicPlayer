<template>
  <div>
    <loading v-if="playListDetail == null"> </loading>
    <div class="playListHeader" v-if="playListDetail != null">
      <avatar
        :imgUrl="playListDetail.coverImgUrl"
        :width="200"
        :bgWidth="208"
        :bgLeft="-4"
        :bgTop="-4"
      ></avatar>
    </div>
  </div>
</template>

<script>
import avatar from "../common/avatar.vue";
import loading from "../common/loading.vue";

export default {
  components: {
    avatar,
    loading,
  },
  props: ["playListDetail"],
};
</script>

<style scoped>
</style>