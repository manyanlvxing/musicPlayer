<template>
  <dl>
    <dt>
      <div class="top-list-img-container">
        <img :src="topListInfo.coverImgUrl" alt="图片加载失败" />
      </div>
      <div class="top-list-title-container">
        <span>{{ topListInfo.name }}</span>
      </div>
    </dt>
    <dd>
      <loading v-show="songsInfo.length < 10"></loading>

      <ol class="top-list-ul" v-show="songsInfo.length == 10">
        <li
          @click="goToSongDetail(val)"
          class="small clear-fix"
          v-for="(val, index) in songsInfo"
          :key="index"
        >
          <!-- 123456 -->
          <div>{{ index + 1 }}</div>
          <div>{{ val.data.songs[0].name }}</div>
          <div class="control" @click="clickSong(val)"></div>
        </li>
      </ol>
    </dd>
  </dl>
</template>

<script>
import { getSongDetail, getPlayerListDetail } from "../api/api";
import loading from "../components/common/loading.vue";

export default {
  props: ["topListInfo"],
  data() {
    return {
      trackIds: [],
      songsInfo: [],
    };
  },
  created() {
    getPlayerListDetail(this.topListInfo.id).then((res) => {
      this.trackIds = res.data.playlist.trackIds.slice(0, 10);

      this.trackIds.forEach((val) => {
        getSongDetail(val.id).then((res) => {
          this.songsInfo.push(res);
        });
      });

      //   let map = this.trackIds.map((val) => getSongDetail(val.id));

      //   Promise.all(map).then((res) => {
      //     this.songsInfo = res;
      //     console.log(this.songsInfo);
      //   });
    });
  },
  methods: {
    clickSong(songInfo) {
      this.$store.commit(
        "setCurrPlayingInfo",
        `https://music.163.com/song/media/outer/url?id=${songInfo.data.songs[0].id}.mp3`
      );

      this.$store.commit("setSongInfo", songInfo.data.songs[0]);
    },
    goToSongDetail(songInfo) {
      this.$router.push({
        path: "/songDetail",
        query: {
          id: songInfo.data.songs[0].id,
        },
      });
    },
  },
  components: {
    loading,
  },
};
</script>

<style scoped>
dl {
  width: 240px;
  /* text-align: start; */
  /* flex-grow: 1; */
}

dt {
  height: 120px;
}

dt div {
  float: left;
}

dt div img {
  width: 80px;
  height: 80px;
}

.top-list-header {
  height: 30px;
  background-color: lightpink;
}

.top-list-ul li {
  position: relative;
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: rgb(51, 51, 51);
}

.top-list-ul li div {
  float: left;
}

.top-list-ul li div:nth-child(1) {
  width: 32px;
  padding: 0 5px 0px 20px;
  font-size: 16px;
}

.top-list-ul li:nth-child(-n + 3) div:nth-child(1) {
  color: rgb(193, 13, 12);
}

.control {
  position: absolute;
  right: 10px;
  top: 6px;
  background-position: 0 -103px;
  background-image: url("../assets/table.png");
  width: 17px;
  height: 17px;
}

.control:hover {
  background-position: 0 -128px;
}

.top-list-play {
  font-size: 25px;
}

.top-list-img-container {
  margin: 20px 20px 8px 20px;
}

.top-list-title-container {
  font-weight: 700;
  font-size: 14px;
  margin-top: 20px;
}
</style>