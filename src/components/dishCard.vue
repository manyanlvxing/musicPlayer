<template>
  <li :class="containerClass">
    <div>
      <img
        class="dishCard"
        :src="imgUrl"
        alt="图片加载失败"
        :class="imgClass"
      />
      <a
        class="mask-cover"
        @click.prevent="onClickDish"
        :class="coverClass"
      ></a>
      <p class="albumName">{{ albumName }}</p>
      <p class="artistName">{{ artistName }}</p>
    </div>
  </li>
</template>

<script>
import { getAlbumDetail } from "../api/api";

export default {
  props: {
    info: Object,
    type: Number,
  },
  created() {
    console.log(this.info);
  },
  computed: {
    imgUrl() {
      return this.info.blurPicUrl;
    },
    albumName() {
      return this.info.name;
    },
    artistName() {
      return this.info.artist.name;
    },
    ablumID() {
      return this.info.id;
    },
    ablumUrl() {
      return `/ablum?id=${this.info.id}`;
    },
    imgClass() {
      return {
        "dish-card_type-one": this.type == 1,
        "dish-card_type-two": this.type == 2,
      };
    },
    coverClass() {
      return {
        "dish-card-cover-one": this.type == 1,
        "dish-card-cover-two": this.type == 2,
      };
    },
    containerClass() {
      return {
        "dish-card-container-one": this.type == 1,
        "dish-card-container-two": this.type == 2,
      };
    },
  },
  methods: {
    clickAblumDetail() {
      // console.log("clickAblumDetail", this.info);

      getAlbumDetail(this.info.id).then((res) => console.log(res));
    },
    onClickDish() {
      this.$router.push({
        path: "/ablum",
        query: {
          id: this.info.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.dishCard {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}

li {
  float: left;
  position: relative;
  list-style: none;
  display: block;
  text-align: start;
  top: 0;
}

li > div {
  width: 100%;
  height: 100%;
}

.maskA {
  position: absolute;
  width: 118px;
  height: 100px;
  left: 0;
  top: 30px;
}

.albumName {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
.artistName {
  font-size: 12px;
  color: rgb(102, 102, 102);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}

.dish-card_type-one {
  width: 100px;
  height: 100px;
}

.dish-card-cover-one {
  position: absolute;
  width: 118px;
  height: 100px;
  left: 0;
  top: 11px;
}

.dish-card_type-two {
  width: 130px;
  height: 130px;
}

.dish-card-cover-two {
  position: absolute;
  width: 153px;
  height: 130px;
  left: 0;
  top: 10px;
  background-position: 0 -845px;
}

.dish-card-container-one {
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-left: 11px;
  margin-right: 15px;
}

.dish-card-container-two {
  width: 130px;
  height: 130px;
  margin: 25px;
}
</style>