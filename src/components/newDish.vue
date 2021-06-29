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
import { getNewDishs } from "../api/api";
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
      this.dishs = res.data.monthData.slice(10, 20);
    });
  },
};
</script>

<style>
.dishContainer {
  width: 1400px;
}

.mask {
  width: 700px;
  overflow: hidden;
  background-color: #f5f5f5;
}
</style>