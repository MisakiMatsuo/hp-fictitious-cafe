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
      <v-container>
        <div class="text-h6 text-center">Pick Up</div>
        <div class="mb-10 text-h4 text-center">おすすめ商品</div>
        <div class="mb-16 text-body-1 text-center">※表示価格は全て税込みです。<br />※別途送料が掛かります。</div>
        <v-row justify="center" align="center" class="my-16">
          <v-col cols="5" class="px-10">
            <div class="mt-6">
              <div class="mx-auto pb-5 text-center product-name">クッキー詰め合わせ</div>
              <div class="pt-5 text-h6 text-center">2,800円</div>
            </div>
            <p class="my-8 text-body-1 product-detail">
              季節や時期によって変化する9種類のお菓子による詰め合わせセットです。発酵バターや皮付きアーモンドパウダーなど素材にこだわり、手作りの美味しさを大切に。蓋を開けた時の華やかさは、贈り物としても最適です。
            </p>
            <v-btn tile block dark color="black" height="60px">
              <v-icon>mdi-cart-outline</v-icon>
              <span class="pl-4 pr-8 text-body-1 font-weight-bold">ご購入はこちらから</span>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="7">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              :aspect-ratio="1.5"
              height="390" />
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mb-16">
          <v-col cols="7">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              :aspect-ratio="1.5"
              height="390" />
          </v-col>
          <v-col cols="5" class="px-10">
            <div class="mt-6">
              <div class="mx-auto pb-5 text-center product-name">クッキー詰め合わせ</div>
              <div class="pt-5 text-h6 text-center">2,800円</div>
            </div>
            <p class="my-8 text-body-1 product-detail">
              季節や時期によって変化する9種類のお菓子による詰め合わせセットです。発酵バターや皮付きアーモンドパウダーなど素材にこだわり、手作りの美味しさを大切に。蓋を開けた時の華やかさは、贈り物としても最適です。
            </p>
            <v-btn tile block dark color="black" height="60px">
              <v-icon>mdi-cart-outline</v-icon>
              <span class="pl-4 pr-8 text-body-1 font-weight-bold">ご購入はこちらから</span>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="my-16">
          <v-col cols="5" class="px-10">
            <div class="mt-6">
              <div class="mx-auto pb-5 text-center product-name">クッキー詰め合わせ</div>
              <div class="pt-5 text-h6 text-center">2,800円</div>
            </div>
            <p class="my-8 text-body-1 product-detail">
              季節や時期によって変化する9種類のお菓子による詰め合わせセットです。発酵バターや皮付きアーモンドパウダーなど素材にこだわり、手作りの美味しさを大切に。蓋を開けた時の華やかさは、贈り物としても最適です。
            </p>
            <v-btn tile block dark color="black" height="60px">
              <v-icon>mdi-cart-outline</v-icon>
              <span class="pl-4 pr-8 text-body-1 font-weight-bold">ご購入はこちらから</span>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="7">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              :aspect-ratio="1.5"
              height="390" />
          </v-col>
        </v-row>
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

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MainCarousel,
    AboutShop,
    UseScene,
    ShopCommitment,
  },
})
</script>

<style scoped>
#main {
  background: #eee;
}

.product-name {
  font-size: 1.9rem;
  letter-spacing: 0.3rem;
  border-bottom: 2px solid #333;
}

.product-detail {
  line-height: 2rem;
}
</style>
