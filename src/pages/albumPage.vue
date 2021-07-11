<template>
  <div class="albumContent">
    <albumheader
      v-if="albumInfo != null"
      :albumInfo="albumDetail"
    ></albumheader>
    <albumSongs v-if="albumInfo != null" :albumSongs="albumSongs"></albumSongs>
    <albumComment :comments="comments"></albumComment>
  </div>
</template>

<script>
import { getAlbumDetail, getAlbumComment } from "../api/api";

import albumheader from "../components/album/albumHeader.vue";
import albumSongs from "../components/album/albumSongs.vue";
import albumComment from "../components/comment/albumComment.vue";

export default {
  data() {
    return {
      albumInfo: null,
      comments: [],
    };
  },
  components: {
    albumheader,
    albumSongs,
    albumComment,
  },
  created() {
    getAlbumDetail(this.$route.query.id).then((res) => {
      console.log("getAlbumDetail", res);
      this.albumInfo = res.data;
    });

    getAlbumComment(this.$route.query.id).then((res) => {
      console.log("getAlbumComment", res);
      this.comments = res.data.comments;
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

<style scoped>
.albumContent {
  box-sizing: border-box;
  width: 700px;
  border: 1px solid #d3d3d3;
  padding: 47px 30px 40px 30px;

  /* border: 1px solid black; */
}
</style>