<template>
  <div>
    <loading
      v-show="hotNewDishes.length == 0 || AllDishes.length == 0"
    ></loading>
    <redLineTitle title1="热门新碟" :width="900"></redLineTitle>
    <div class="hot-dishes">
      <dish-card
        v-for="(val, index) in hotNewDishes"
        :key="index"
        :info="val"
        :type="2"
      ></dish-card>
    </div>
    <redLineTitle title1="全部新碟" :width="900"> </redLineTitle>
    <div class="allDishes">
      <dish-card
        v-for="(val, index) in AllDishes"
        :key="index"
        :info="val"
        :type="2"
      ></dish-card>
    </div>
  </div>
</template>

<script>
import redLineTitle from "../components/common/redLineTitle.vue";
import dishCard from "../components/newDishes/dishCard.vue";

import { getNewDishs, getAllNewDishes } from "../api/api";

import loading from "../components/common/loading.vue";

export default {
  data() {
    return {
      hotNewDishes: [],
      AllDishes: [],
    };
  },
  //   props: ["hotNewDishes", "AllDishes"],
  components: {
    redLineTitle,
    dishCard,
    loading,
  },
  created() {
    getNewDishs().then((res) => {
      this.hotNewDishes = res.data.albums.slice(0, 10);
    });

    getAllNewDishes(35).then((res) => {
      console.log("getAllNewDishes", res);
      this.AllDishes = res.data.albums;
    });
  },
};
</script>

<style scoped>
.hot-dishes {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
</style>