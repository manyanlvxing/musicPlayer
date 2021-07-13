<template>
  <div class="playListDetail">
    <songHeader :songDetail="songDetail"></songHeader>
    <albumComment :comments="comments"></albumComment>
  </div>
</template>

<script>
import {
  //   getPlayListDetail,
  getSongDetail,
  getMusicComment,
} from "../api/api";

import songHeader from "../components/songComp/songHeader.vue";
import albumComment from "../components/comment/albumComment.vue";

export default {
  data() {
    return {
      songDetail: null,
      comments: [],
    };
  },
  components: {
    albumComment,
    songHeader,
  },
  created() {
    
    getSongDetail(this.$route.query.id).then((res) => {
      this.songDetail = res.data.songs[0];
    });

    getMusicComment(this.$route.query.id).then((res) => {
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