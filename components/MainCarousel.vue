<template>
  <v-container>
    <v-carousel
      cycle
      hide-delimiter-background
      interval="10000"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(carousel, index) in carousels"
        :key="`slide-${index}`"
        :src="carousel.src"
      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ carousel.text }}</div>
        </v-row>
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
          src: 'https://picsum.photos/510/300?random',
          text: 'First',
        },
        {
          src: 'https://picsum.photos/510/300?random',
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
