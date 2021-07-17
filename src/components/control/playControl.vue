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
      <div class="bar-circal" :style="{ left: currWidth }"></div>

      <span class="play-time">{{ curr }}/{{ duration }}</span>
    </div>
    <div class="player-right"></div>
    <audio ref="playControl" :src="currMusic"></audio>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { formatTime } from "../../utils/utils";

export default {
  data() {
    return {
      maxWidth: 460,
      currWidth: "0px",
      currTime: 0,
      totalTime: 0,
    };
  },
  methods: {
    initEvents() {
      let audio = this.$refs.playControl;

      audio.oncanplay = function () {
        console.log("canplay");
        audio.play();
        audio.volume = 0.4;
      };

      audio.ontimeupdate = () => {
        // console.log("timeUpdate", audio.currentTime, audio.duration);
        this.currWidth = `${
          this.maxWidth * (audio.currentTime / audio.duration)
        }px`;

        this.currTime = audio.currentTime;
        this.totalTime = audio.duration;
      };

      audio.onerror = function (e) {
        console.log("onerror", e);
      };
    },
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
      // let audio = this.$refs.playControl;
      // audio.oncanplay = function () {
      //   console.log("canplay");
      //   audio.play();
      //   audio.volume = 0.4;
      // };
      // audio.ontimeupdate = () => {
      //   // console.log("timeUpdate", audio.currentTime, audio.duration);
      //   this.currWidth = `${
      //     this.maxWidth * (audio.currentTime / audio.duration)
      //   }px`;
      // };
    },
  },

  computed: {
    ...mapState({
      isPlaying: "isPlaying",
      currMusic: "currMusic",
      currSongInfo: "currSongInfo",
    }),
    ...mapGetters(["picUrl", "albumName", "artistName"]),
    stopOrPlay() {
      return {
        play: this.isPlaying,
        stop: !this.isPlaying,
      };
    },
    curr() {
      return formatTime(new Date(this.currTime * 1000), "mm:ss");
    },
    duration() {
      return formatTime(new Date(this.totalTime * 1000), "mm:ss");
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
  mounted() {
    this.initEvents();
  },
};
</script>

<style lang='less' scoped>
@playerbartop: 15px;

@colorSongName: #e8e8e8;
@colorArtistName: #9b9b9b;

.player-background-img {
  background-image: url(~assets/playbar.png);
  background-repeat: repeat-x;
}

.player-bar-img {
  background-image: url(~assets/statbar.png);
}

.playContrl {
  height: 45px;
  width: 100%;
  min-width: 1000px;
  position: fixed;
  bottom: 0px;
  display: flex;
  background-position: 0 0;
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
  top: 30px;
  left: 4px;
}

.bar-red {
  position: absolute;
  height: 9px;
  width: 466px;
  background-position: left -66px;
  top: 30px;
  left: 4px;
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

.albumAvatar {
  img {
    width: 100%;
    height: 100%;
  }
}

.bg {
  float: left;
  width: 700px;
  height: 53px;
  margin-left: 20px;
  position: relative;
  text-align: start;
  .songname {
    line-height: 33px;
    color: @colorSongName;
    font-size: 10px;
    text-shadow: 0 1px 0 #171717;
    margin-right: 20px;
  }
  .artistname {
    color: @colorArtistName;
    line-height: 33px;
    font-size: 10px;
    text-shadow: 0 1px 0 #171717;
  }
}


.bar-circal {
  position: absolute;
  width: 22px;
  height: 24px;
  background-image: url(~assets/iconall.png);
  background-position: 0px -250px;
  top: 24px;
  left: 0px;
}

.play-time {
  font-size: 12px;
  position: absolute;
  right: 160px;
  color: @colorArtistName;
  top: 27px;
}
</style>