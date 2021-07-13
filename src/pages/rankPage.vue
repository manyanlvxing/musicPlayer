<template>
  <div class="rank">
    <div class="left">
      <ul>
        <rankItem
          @changerRank="onChangeRank($event)"
          v-for="(v, i) in rankTypes"
          :key="i"
          :data="v"
        ></rankItem>
      </ul>
    </div>
    <div class="right">
      <albumSongs :albumSongs="typeSongs"></albumSongs>
    </div>
  </div>
</template>

<script>
import rankItem from "../components/rankComp/rankItem.vue";
import albumSongs from "../components/album/albumSongs.vue";
import { getTopDetail, getPlayListDetail } from "../api/api";

export default {
  data() {
    return {
      rankTypes: [],
      typeSongs: [],
      currRankID: 0,
    };
  },
  components: {
    rankItem,
    albumSongs,
  },
  created() {
    getTopDetail().then((res) => {
      console.log("getTopDetail", res);
      //   getPlayerListDetail(res.data.list[0].id).then((res) => {
      //     console.log("getPlayerListDetail", res);
      //   });
      this.rankTypes = res.data.list;
      this.currRankID = this.rankTypes[0].id;

      getPlayListDetail(this.currRankID).then((res) => {
        console.log("getPlayListDetail", res);
        this.typeSongs = res.data.playlist.tracks;
      });
    });
  },
  methods: {
    onChangeRank(id) {
      if (this.currRankID == id) return;

      this.currRankID = id;
    },
  },
  watch: {
    currRankID() {
        
    },
  },
};
</script>

<style scoped>
.rank {
  width: 980px;
  min-height: 700px;
  border: 1px solid #d3d3d3;
  background-repeat: repeat-y;
  background-position: center 0;
  background-image: url("../assets/wrap3.png");
  flex-shrink: 0;
}

.left {
  float: left;
  width: 240px;
}
.right {
  float: left;
  width: 740px;
}
</style>