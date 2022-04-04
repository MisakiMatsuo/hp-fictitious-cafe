<template>
  <div id="main">
    <section>
      <AbsoluteHeader />
    </section>
    <section class="pt-8 pb-16">
      <MainCarousel />
    </section>
    <section id="aboutShop">
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
        <SectionTitle title="生産者の声" sub-title="Comment" />
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
import AbsoluteHeader from '@/components/AbsoluteHeader.vue';
import MainCarousel from '@/components/MainCarousel.vue';
import AboutShop from '@/components/AboutShop.vue';
import UseScene from '@/components/UseScene.vue';
import ShopCommitment from '@/components/ShopCommitment.vue';
import PickUp from '@/components/PickUp.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    AbsoluteHeader,
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
