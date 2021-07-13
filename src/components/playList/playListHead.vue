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
          <span> {{ playListDetail.creator.nickname }}</span>
          <span> {{ createTime }}</span>
        </div>
        <div class="control"></div>
        <div class="detail-tags">标签:{{ playListDetail.tags }}</div>
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
.playListHeader {
  position: relative;
  text-align: left;
}

.msg {
  position: absolute;
  left: 220px;
  top: 0;
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

.control {
  width: 100%;
  height: 40px;
  opacity: 0;
}
</style>