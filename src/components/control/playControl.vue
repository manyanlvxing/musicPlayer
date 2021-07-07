<template>
  <div class="playContrl player-background-img">
    <div class="player-left"></div>
    <div class="left player-background-img"></div>
    <div
      class="player-background-img"
      :class="stopOrPlay"
      @click="playOrStop"
    ></div>
    <div class="right player-background-img"></div>
    <div class="albumAvatar">
      <img :src="picUrl" alt="" />
    </div>

    <div class="bg">
      <span class="songname">{{ albumName }}</span>
      <span class="artistname">{{ artistName }}</span>

      <div class="bar-black player-bar-img"></div>
      <div class="bar-red player-bar-img" :style="{ width: currWidth }"></div>

      <span>{{ currTime }}/{{ duration }}</span>
    </div>
    <div class="player-right"></div>
    <audio ref="playControl" :src="currMusic"></audio>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      maxWidth: 460,
    };
  },
  methods: {
    playOrStop() {
      if (this.isPlaying) {
        this.$refs.playControl.pause();
      } else {
        this.$refs.playControl.play();
      }

      this.$store.commit("changePlayingState", !this.isPlaying);
    },
    playSong() {
      this.playMusic();
    },
    playMusic() {
      let audio = this.$refs.playControl;

      audio.oncanplay = function () {
        console.log("canplay");
        audio.play();
        audio.volume = 0.4;
      };
    },
  },

  computed: {
    ...mapState({
      isPlaying: "isPlaying",
      currMusic: "currMusic",
      currSongInfo: "currSongInfo",
    }),
    ...mapGetters(["picUrl"]),
    currTime() {
      return (
        (this.$refs.playControl && this.$refs.playControl.currentTime) || 0
      );
    },
    duration() {
      return this.$refs.playControl && this.$refs.playControl.duration;
    },
    albumName() {
      return this.currSongInfo ? this.currSongInfo.name : "";
    },
    artistName() {
      return this.currSongInfo ? this.currSongInfo.ar[0].name : "";
    },
    currProgress() {
      return isNaN(this.duration) ? 0 : this.currTime / this.duration;
    },
    currWidth() {
      return this.maxWidth * this.currProgress + "px";
    },
    stopOrPlay() {
      return {
        play: this.isPlaying,
        stop: !this.isPlaying,
      };
    },
  },
  watch: {
    isPlaying(oldVal, nowVal) {
      if (!oldVal && nowVal) {
        this.playSong();
      } else {
        // this.$refs.playControl.
      }
    },
    currMusic(oldSong, nowSong) {
      if (oldSong != nowSong) {
        this.playSong();
      }
    },
  },
};
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

.stop {
  float: left;
  width: 36px;
  height: 36px;
  background-position: 0 -204px;
  margin: 10px 10px 0 10px;
}

.play {
  float: left;
  width: 36px;
  height: 36px;
  background-position: 0 -165px;
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

.player-left {
  width: 100px;
  flex: 1;
}
.player-right {
  width: 100px;
  flex: 1;
}

.albumAvatar {
  width: 30px;
  height: 30px;
  background-color: #fff;
  margin-top: 10px;
}

.albumAvatar img {
  width: 100%;
  height: 100%;
}

.bg {
  text-align: start;
}

.bg .songname {
  line-height: 33px;
  color: #e8e8e8;
  font-size: 10px;
  text-shadow: 0 1px 0 #171717;
  margin-right: 20px;
}

.bg .artistname {
  color: #9b9b9b;
  line-height: 33px;
  font-size: 10px;
  text-shadow: 0 1px 0 #171717;
}
</style>