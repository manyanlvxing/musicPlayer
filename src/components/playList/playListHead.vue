<template>
  <div class="container">
    <loading v-if="playListDetail == null"> </loading>
    <div class="playListHeader" v-if="playListDetail != null">
      <avatar
        :imgUrl="playListDetail.coverImgUrl"
        :width="200"
        :bgWidth="208"
        :bgLeft="-4"
        :bgTop="-4"
      ></avatar>
      <div class="msg">
        <div class="playListName">
          <div class="icon-type"></div>
          {{ playListDetail.name }}
        </div>
        <div class="detail">
          <img
            class="creator-avatar"
            :src="playListDetail.creator.avatarUrl"
            alt="图片加载失败"
          />
          <span class="creatorName">
            {{ playListDetail.creator.nickname }}</span
          >
          <span class="createTime"> {{ createTime }}</span>
        </div>
        <div class="detail-tags">
          <div>标签：</div>
          <div v-for="(v, i) in playListDetail.tags" :key="i">
            <span>{{ v }}&nbsp;</span>
          </div>
        </div>
        <div class="detail-des">介绍：{{ playListDetail.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "../common/avatar.vue";
import loading from "../common/loading.vue";

import { formatTime } from "../../utils";

export default {
  components: {
    avatar,
    loading,
  },
  props: ["playListDetail"],
  computed: {
    createTime() {
      return (
        formatTime(new Date(this.playListDetail.createTime), "yyyy-MM-dd") +
        "创建"
      );
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 30px;
}

.playListHeader {
  position: relative;
  text-align: left;
}

.msg {
  position: absolute;
  left: 220px;
  top: 0;
  padding-left: 20px;
}

.creator-avatar {
  width: 35px;
  height: 35px;
}

.playListName {
  font-size: 20px;
  margin-bottom: 10px;
}

.msg {
  font-size: 12px;
}

.icon-type {
  float: left;
  background-image: url("../../assets/icon.png");
  background-position: 0 -243px;
  width: 54px;
  height: 24px;
  margin-right: 10px;
}

.detail {
  height: 35px;
}

.detail img {
  vertical-align: middle;
  margin-right: 10px;
}
.detail span {
  vertical-align: middle;
  margin: 0 5px;
}

.creatorName {
  color: #0c73c2;
}

.createTime {
  color: #999;
}

.detail-tags {
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 85px;
}

.detail-tag {
  width: 40px;
  height: 22px;
  background-image: url("../../assets/button2.png");
  background-position: right -27px;
  text-shadow: 0 1px #fdfdfd;
}

.detail-tag span {
  width: 24px;
  height: 22px;
  padding: 0 13px 3px;
  background-image: url("../../assets/button2.png");
}

.detail-tags div {
  float: left;
}
</style>