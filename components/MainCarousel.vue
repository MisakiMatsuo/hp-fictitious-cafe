<template>
  <v-container>
    <v-carousel
      cycle
      interval="4000"
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

<style>
.v-window__container {
  transition: 0.3s cubic-bezier(0, 0.13, 0, 1);
}

.v-item-group {
  transition: 0.3s cubic-bezier(0, 0.13, 0, 1);
}
</style>
