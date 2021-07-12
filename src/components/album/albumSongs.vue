<template>
  <div class="songs" v-if="albumSongs != null">
    <redLineTitle title1="包含歌曲列表" :title2="albumLength"></redLineTitle>
    <table>
      <thead>
        <tr>
          <th class="div1">
            <div class="wp"></div>
          </th>
          <th class="div2">
            <div class="wp">歌曲标题</div>
          </th>
          <th class="div3">
            <div class="wp">时长</div>
          </th>
          <th class="div4">
            <div class="wp">歌手</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <albumSongItem
          v-for="(info, index) in albumSongs"
          :key="index"
          :index="index"
          :songInfo="info"
        ></albumSongItem>
      </tbody>
    </table>
  </div>
</template>

<script>
import albumSongItem from "./albumSongItem.vue";
import redLineTitle from "../common/redLineTitle.vue";

export default {
  props: {
    albumSongs: [],
  },
  components: {
    albumSongItem,
    redLineTitle,
  },
  computed: {
    albumLength() {
      return `${this.albumSongs.length}首歌`;
    },
  },
};
</script>

<style scoped>
.wp {
  font-size: 12px;
  line-height: 18px;
  padding: 8px 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  table-layout: fixed;
  border: 1px solid #d9d9d9;
  text-align: left;
}

/* table {
  text-align: left;
  color: rgb(102, 102, 102);
  background-color: rgb(247, 247, 247);
} */

table th {
  height: 38px;
  font-weight: normal;
  background-image: url("../../assets/table.png");
  background-repeat: repeat-x;
}

ata {
  border: 1px solid #d9d9d9;
}

tbody tr:nth-child(odd) {
  background-color: rgb(247, 247, 247);
}

.li-header div {
  font-size: 12px;
  line-height: 40px;
  text-align: start;
  padding-left: 10px;
}

.li-header {
  display: flex;
  height: 38.5px;
  border: 1px solid rgb(217, 217, 217);
  background-color: rgb(247, 247, 247);
  color: rgb(51, 51, 51);
}

.div1 {
  width: 74px;
}

.div3 {
  width: 91px;
}
.div4 {
  width: 20%;
}

.songs {
  margin-bottom: 40px;
}

.songs span:nth-child(1) {
  font-size: 20px;
  color: rgb(51, 51, 51);
  margin-right: 15px;
}

.songs span:nth-child(2) {
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.songs-title {
  height: 40px;
  line-height: 40px;
}
</style>