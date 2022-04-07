<template>
  <v-container>
    <v-carousel
      cycle
      :interval="7000"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(carousel, index) in carousels"
        :key="`slide-${index}`"
        :src="carousel.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
<!--        <v-row class="fill-height" align="center" justify="center">-->
<!--          <div class="text-h2">{{ carousel.text }}</div>-->
<!--        </v-row>-->
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';

interface MainCarouselData {
  carousels: {
    src: string;
    text: string;
  }[];
}

export default Vue.extend({
  name: 'MainCarousel',
  data(): MainCarouselData {
    return {
      carousels: [
        {
          src: 'https://picsum.photos/520/300?random',
          text: 'First',
        },
        {
          src: 'https://picsum.photos/515/300?random',
          text: 'Second',
        },
        {
          src: 'https://picsum.photos/510/300?random',
          text: 'Third',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.v-window {
  &-x-transition,
  &-x-reverse-transition,
  &-y-transition,
  &-y-reverse-transition {
    &-enter-active,
    &-leave-active {
      transition: 3s cubic-bezier(0.25, 0.8, 0.5, 3) !important;
    }
  }
}
</style>
