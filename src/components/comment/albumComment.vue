<template>
  <div class="div-comment">
    <redLineTitle title1="评论" :title2="title2"></redLineTitle>
    <div class="jincaipl">
      <span>精彩评论</span>
    </div>
    <albumCommentItem
      v-for="(val, index) in comments"
      :key="index"
      :comment="val"
    ></albumCommentItem>
  </div>
</template>

<script>
import albumCommentItem from "./albumCommentItem.vue";
import redLineTitle from "../common/redLineTitle.vue";

export default {
  props: ["comments"],
  components: {
    albumCommentItem,
    redLineTitle,
  },
  computed: {
    title2() {
      return `共${this.comments.length}条评论`;
    },
  },
};
</script>

<style scoped>
.div-comment {
  width: 100%;
}

.jincaipl {
  font-size: 12px;
  text-align: left;
  margin: 20px 0 5px 0;
  font-weight: 700;
}
</style>