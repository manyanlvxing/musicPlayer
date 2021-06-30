<template>
  <div class="albumContent">
    <albumheader
      v-if="albumInfo != null"
      :albumInfo="albumDetail"
    ></albumheader>
    <albumSongs v-if="albumInfo != null" :albumSongs="albumSongs"></albumSongs>
  </div>
</template>

<script>
import { getAlbumDetail } from "../api/api";

import albumheader from "../components/albumHeader.vue";
import albumSongs from "../components/albumSongs.vue";

export default {
  data() {
    return {
      albumInfo: null,
    };
  },
  components: {
    albumheader,
    albumSongs,
  },
  created() {
    getAlbumDetail(this.$route.query.id).then((res) => {
      console.log(res);
      this.albumInfo = res.data;
    });
  },
  computed: {
    albumDetail() {
      return this.albumInfo.album;
    },
    albumSongs() {
      return this.albumInfo.songs;
    },
  },
};
</script>

<style>
.albumContent {
  width: 700px;
  /* border: 1px solid black; */
}
</style>