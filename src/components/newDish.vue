<template>
  <div>
    <commonTitle title="新碟上架"></commonTitle>
    <div class="mask">
      <commonArrow
        @onArrowClick="onClickArrow($event)"
        direction="left"
      ></commonArrow>

      <div class="ul-container">
        <transition name="behind">
          <ul class="dishContainer" v-show="isShowBehind">
            <dish-card
              v-for="(val, index) in behindArr"
              :key="index"
              :info="val"
            ></dish-card>
          </ul>
        </transition>
        <transition name="after">
          <ul class="dishContainer" v-show="!isShowBehind">
            <dish-card
              v-for="(val, index) in afterArr"
              :key="index"
              :info="val"
            ></dish-card>
          </ul>
        </transition>
      </div>

      <commonArrow
        @onArrowClick="onClickArrow($event)"
        direction="right"
      ></commonArrow>
    </div>
  </div>
</template>

<script>
import { getNewDishs, getTopDetail } from "../api/api";
import dishCard from "./dishCard.vue";
import commonTitle from "./commonTitle.vue";
import commonArrow from "./control/commonArrow.vue";

export default {
  data() {
    return {
      startIndex: 0,
      isMove: "",
      dis: 0,
      isShowBehind: true,
      behindArr: [],
      afterArr: [],
    };
  },
  components: {
    dishCard,
    commonTitle,
    commonArrow,
  },
  created() {
    getNewDishs().then((res) => {
      // this.allDishs = res.data.albums.slice(0, 10);
      // this.dishs = res.data.albums.slice(this.startIndex, this.startIndex + 5);

      this.behindArr = res.data.albums.slice(0, 5);
      this.afterArr = res.data.albums.slice(5, 10);
    });

    getTopDetail().then((res) => console.log(res));
  },
  methods: {
    onClickArrow(direction) {
      console.log(direction);
      // this.startIndex = this.startIndex == 0 ? 5 : 0;
      // this.dishs = this.allDishs.slice(this.startIndex, this.startIndex + 5);

      // this.isMove = this.isMove == "move" ? "moveBack" : "move";

      // return;

      this.playMove();
    },
    playMove() {
      this.isShowBehind =!this.isShowBehind;
    },
  },
};
</script>

<style scoped>
.ul-container {
  position: relative;
  float: left;
  width: 590px;
  height: 186px;
  overflow: hidden;
  margin: 0 18px;
}

.dishContainer {
  position: absolute;
  float: left;
  height: 150px;
  width: 590px;
}

.mask {
  width: 700px;
  overflow: hidden;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 15px auto;
  height: 184px;
}

.move {
  transform: translateX(-590px);
  transition: all 2s;
}

.moveBack {
  transform: translateX(0px);
  transition: all 2s;
}

.behind-enter,
.behind-leave-to {
  transform: translateX(-590px);
}

.behind-enter-active,
.behind-leave-active {
  transition: all 1s;
}

.after-enter,
.after-leave-to {
  transform: translateX(590px);
}

.after-enter-active,
.after-leave-active {
  transition: all 1s;
}
</style>