<template>
  <div class="playContrl player-background-img">
    <div class="player-left"></div>
    <div class="left player-background-img"></div>
    <div class="play player-background-img"></div>
    <div class="right player-background-img"></div>
    <div class="bg">
      <div class="bar-black player-bar-img"></div>
      <!-- <div class="bar-red player-bar-img"></div> -->
    </div>
    <div class="player-right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
@playerbartop: 15px;

.player-background-img {
  background-image: url("../../assets/playbar.png");
  background-repeat: repeat-x;
}

.player-bar-img {
  background-image: url("../../assets/statbar.png");
}

.playContrl {
  height: 45px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  background-position: 0 0;
}

.bg {
  float: left;
  width: 700px;
  height: 53px;
  margin-left: 20px;
  position: relative;
}

.play {
  float: left;
  width: 36px;
  height: 36px;
  background-position: 0 -204px;
  margin: 10px 10px 0 10px;
}
.left {
  float: left;
  width: 28px;
  height: 28px;
  background-position: 0 -130px;
  margin-top: @playerbartop;
  margin-left: 20px;
}

.right {
  float: left;
  width: 28px;
  height: 28px;
  background-repeat: repeat-x;
  background-position: -110px -130px;
  margin-top: @playerbartop;
  margin-right: 20px;
}

.bar-black {
  position: absolute;
  height: 9px;
  width: 466px;
  background-position: right 0;
  top: 23px;
}

.bar-red {
  position: absolute;
  height: 9px;
  width: 466px;
  background-position: left -66px;
  top: 23px;
}

.player-left{
    width: 100px;
    flex: 1;
}
.player-right{
    width: 100px;
    flex: 1;
}
</style>