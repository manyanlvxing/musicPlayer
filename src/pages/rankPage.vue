<template>
  <div class="rank">
    <div class="left">
      <ul>
        <rankItem
          @changerRank="onChangeRank($event)"
          v-for="(v, i) in rankTypes"
          :key="i"
          :data="v"
          :currSelectID="currRankID"
        ></rankItem>
      </ul>
    </div>
    <div class="right">
      <rankHeader :rankInfo="rankInfo" :isLoading="isLoading"></rankHeader>
      <albumSongs :albumSongs="typeSongs"></albumSongs>
    </div>
  </div>
</template>

<script>
import rankItem from "../components/rankComp/rankItem.vue";
import albumSongs from "../components/album/albumSongs.vue";
import { getTopDetail, getPlayListDetail } from "../api/api";
import rankHeader from "../components/rankComp/rankHeader.vue";

export default {
  data() {
    return {
      rankTypes: [],
      typeSongs: [],
      currRankID: 0,
      rankInfo: {},
      isLoading: true,
    };
  },
  components: {
    rankItem,
    albumSongs,
    rankHeader,
  },
  created() {
    getTopDetail().then((res) => {
      console.log("getTopDetail", res);
      //   getPlayerListDetail(res.data.list[0].id).then((res) => {
      //     console.log("getPlayerListDetail", res);
      //   });
      this.rankTypes = res.data.list;
      this.currRankID = this.rankTypes[0].id;

      // getPlayListDetail(this.currRankID).then((res) => {
      //   console.log("getPlayListDetail", res);
      //   this.typeSongs = res.data.playlist.tracks;

      // });
    });
  },
  methods: {
    onChangeRank(id) {
      if (this.currRankID == id) return;

      this.currRankID = id;
    },
  },
  watch: {
    currRankID(newVal) {
      this.isLoading = true;
      getPlayListDetail(newVal).then((res) => {
        console.log("getPlayListDetail", res);
        this.typeSongs = res.data.playlist.tracks;
        this.rankInfo = res.data;
        this.isLoading = false;
      });
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