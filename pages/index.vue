<template>
  <div id="main">
    <section class="py-16">
      <MainCarousel />
    </section>
    <section>
      <AboutShop />
    </section>
    <section id="useScene" class="py-16">
      <UseScene />
    </section>
    <section id="shopCommitment" class="py-16">
      <ShopCommitment />
    </section>
    <section id="pickUp" class="py-16">
      <PickUp />
    </section>
    <section id="movie" class="py-16">
      <v-container class="text-center">
        <div class="text-h6">Comment</div>
        <div class="mb-10 text-h4">生産者の声</div>
        <div>
          <video
            autoplay
            muted
            src="static/test.mov"
            controls="controls"
            width="800" />
        </div>
      </v-container>
    </section>
    <section id="products" class="py-16">
      <UseScene />
    </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import MainCarousel from '@/components/MainCarousel.vue';
import AboutShop from '@/components/AboutShop.vue';
import UseScene from '@/components/UseScene.vue';
import ShopCommitment from '@/components/ShopCommitment.vue';
import PickUp from '@/components/PickUp.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MainCarousel,
    AboutShop,
    UseScene,
    ShopCommitment,
    PickUp,
  },
})
</script>

<style scoped>
#main {
  background-image: url('./static/groovepaper.png');
  background-size: 20%;
  background-repeat: repeat;
}
</style>
