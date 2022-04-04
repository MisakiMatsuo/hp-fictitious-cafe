<template>
  <v-container class="mt-16">
    <SectionTitle :title="title" :sub-title="subTitle" />
    <div class="mb-16 text-body-1 text-center">※表示価格は全て税込みです。<br />※別途送料が掛かります。</div>
    <v-row
      v-for="(product, index) of products"
      :key="`product-${index}`"
      justify="center"
      align="end"
      class="my-16"
    >
      <v-col cols="5" class="px-10" :order="index % 2 === 0 ? 'first' : 'last'">
        <div class="mt-6">
          <div class="mx-auto pb-5 text-center product-name">{{ product.name }}</div>
          <div class="pt-5 text-h6 text-center">{{ product.price }} 円</div>
        </div>
        <div class="my-8">
          <p class="my-0 text-body-1 product-detail">{{ product.detail }}</p>
          <p class="my-0 text-body-1 product-detail">{{ product.note }}</p>
        </div>
        <v-btn tile block dark color="black" height="60px">
          <v-icon>mdi-cart-outline</v-icon>
          <span class="pl-4 pr-8 text-body-1 font-weight-bold">ご購入はこちらから</span>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="7" :order="index % 2 === 0 ? 'last' : 'first'">
        <v-img :src="product.img" :aspect-ratio="1.5" height="390" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';

interface PickUpData {
  img: {
    src: string;
  };
  title: string;
  subTitle: string;
  products: {
    img: string;
    name: string;
    price: string;
    detail: string;
    note?: string;
  }[];
}

export default Vue.extend({
  name: 'PickUp',
  components: { SectionTitle },
  data(): PickUpData {
    return {
      img: {
        src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
      },
      title: 'おすすめ商品',
      subTitle: 'Pick Up',
      products: [
        {
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          name: 'クッキー詰め合わせ',
          price: '2,800',
          detail: '季節や時期によって変化する9種類のお菓子による詰め合わせセットです。発酵バターや皮付きアーモンドパウダーなど素材にこだわり、手作りの美味しさを大切に。蓋を開けた時の華やかさは、贈り物としても最適です。',
        },
        {
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          name: '自家製プリン',
          price: '6個セット 2,400',
          detail: 'uni CAFEの人気メニュー「プリンパフェ」に使用するプリンを瓶詰めでお届け。卵黄と生クリームをふんだんに使用した濃厚な味わいが魅力です。なめらかな食感から広がるバニラビーンズの香り高さが堪らない一品です。',
          note: '※冷蔵商品です。',
        },
        {
          img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
          name: 'ベイクドチーズケーキ',
          price: '1ホール（直径12cm） 2,800',
          detail: 'お店の看板メニューの1つ“ベイクドチーズケーキ”をホールサイズで販売しています。濃厚さの中にさっぱりとしたレモンの酸味を感じ、口当たりもやわらかに。全粒粉を使用した下地のサクサク感も合わさって、食感のコントラストをお楽しみいただけます。',
          note: '※冷凍商品です。',
        },
      ],
    }
  },
})
</script>

<style scoped>
.subTitle {
  letter-spacing: .3rem !important;
}

.title {
  letter-spacing: .5rem !important;
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

