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
      <ProducersVoice />
    </section>
    <section id="products" class="py-16">
      <ProductItems />
    </section>
    <section id="payment" class="py-16">
      <PaymentInfo />
    </section>
    <section id="shopInfo" class="py-16">
      <ShopInfo />
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
import ProducersVoice from '@/components/ProducersVoice.vue';
import ProductItems from '@/components/ProductItems.vue';
import PaymentInfo from '@/components/PaymentInfo.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    AbsoluteHeader,
    MainCarousel,
    AboutShop,
    UseScene,
    ShopCommitment,
    PickUp,
    ProducersVoice,
    ProductItems,
    PaymentInfo,
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
