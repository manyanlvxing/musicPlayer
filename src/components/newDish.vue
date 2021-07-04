<template>
  <div class="mask">
    <ul class="dishContainer">
      <dish-card
        v-for="(val, index) in dishs"
        :key="index"
        :info="val"
      ></dish-card>
    </ul>
  </div>
</template>

<script>
import { getNewDishs, getTopDetail } from "../api/api";
import dishCard from "./dishCard.vue";
export default {
  data() {
    return {
      dishs: [],
    };
  },
  components: {
    dishCard,
  },
  created() {
    getNewDishs().then((res) => {
      this.dishs = res.data.albums.slice(0, 10);
    });

    getTopDetail().then((res) => console.log(res));
  },
};
</script>

<style scoped>
.dishContainer {
  width: 1400px;
  height: 150px;
}

.mask {
  width: 700px;
  overflow: hidden;
  background-color: #f5f5f5;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>