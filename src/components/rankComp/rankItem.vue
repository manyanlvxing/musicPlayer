<template>
  <li class="rankItem" @click="$emit('changerRank', data.id)">
    <img :src="data.coverImgUrl" alt="" />
    <div class="span-container">
      <p class="small">{{ data.name }}</p>

      <p class="small">刚刚更新</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.rankItem {
  position: relative;
  width: 220px;
  height: 42px;
  padding: 10px 0 10px 20px;
  text-align: left;
}

img {
  position: absolute;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  left: 20px;
  top: 10px;
}

.small {
  font-size: 12px;
  line-height: 21px;
}

.span-container {
  position: absolute;
  height: 42px;
  width: 160px;
  top: 10px;
  left: 60px;
  padding-left: 10px;
}

.span-container p:nth-of-type(2) {
  color: #999;
}
</style>