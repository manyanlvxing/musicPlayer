<template>
  <div class="playListDetail">
    <playListHeader :playListDetail="playListDetail"></playListHeader>
    <albumSongs :albumSongs="playListSongs"></albumSongs>
    <albumComment :comments="comments"></albumComment>
  </div>
</template>

<script>
import {
  getPlayListDetail,
  getSongDetail,
  getPlayListComment,
} from "../api/api";

import playListHeader from "../components/playList/playListHead.vue";
import albumSongs from "../components/album/albumSongs.vue";
import albumComment from "../components/comment/albumComment.vue";

export default {
  data() {
    return {
      playListDetail: null,
      playListSongs: [],
      comments: [],
    };
  },
  components: {
    albumSongs,
    albumComment,
    playListHeader,
  },
  created() {
    console.log(this.$route.query.id);

    getPlayListDetail(this.$route.query.id).then((res) => {

      this.playListDetail = res.data.playlist;

      getSongDetail(res.data.playlist.trackIds[0].id).then((res) => {
        console.log("getSongDetail", res.data);
      });

      this.playListSongs = res.data.playlist.tracks;
    });

    getPlayListComment(this.$route.query.id).then((res) => {
      console.log(res);
      this.comments = res.data.comments;
    });
  },
};
</script>

<style scoped>
.playListDetail {
  box-sizing: border-box;
  width: 700px;
  border: 1px solid #d3d3d3;
  padding: 47px 30px 40px 30px;

  /* border: 1px solid black; */
}
</style>