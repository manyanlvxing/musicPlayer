<template>
  <div class="comment-item">
    <div class="userAvatar"><img :src="comment.user.avatarUrl" alt="" /></div>
    <div class="userComment">
      <span class="nickName">{{ comment.user.nickname }}</span>
      <span>&nbsp;:&nbsp;{{ comment.content }}</span>
    </div>
    <div class="commentDate">{{ commentDate }}</div>
  </div>
</template>

<script>
import { formatTime } from "../../utils";
export default {
  props: ["comment"],
  computed: {
    commentDate() {
      return formatTime(new Date(this.comment.time), "M月d日 hh:mm");
    },
  },
};
</script>

<style scoped>
.comment-item {
  height: 51px;
  padding: 15px 0;
  font-size: 12px;
  color: #333;
  border-top: 1px dotted #ccc;
  text-align: left;
}

img {
  width: 100%;
  height: 100%;
}

.userAvatar {
  float: left;
  width: 50px;
  height: 50px;
}

.userComment {
  float: left;
  width: 588px;
  padding: 0 10px;
  box-sizing: border-box;
}

.nickName {
  color: #0c73c2;
}

.commentDate {
  float: left;
  color: #999;
  margin-left: 10px;
  margin-top: 18px;
}
</style>