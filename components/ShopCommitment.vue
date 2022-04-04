<template>
  <v-row class="my-16">
    <v-col cols="6" class="pa-0">
      <v-img :src="img.src" />
    </v-col>
    <v-col cols="6" class="pa-0">
      <SectionTitle :title="title" :sub-title="subTitle" />
      <v-list-item
        v-for="(commitment, index) of commitments"
        :key="`commitment-${index}`"
        class="px-0 py-4 ml-16 list"
      >
        <v-list-item-icon>
          <span class="tile">{{ `0${index + 1}` }}</span>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-center sub-font">
            {{ commitment }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';

interface ShopCommitmentData {
  img: {
    src: string;
  };
  title: string;
  subTitle: string;
  commitments: string[];
}

export default Vue.extend({
  name: 'ShopCommitment',
  components: { SectionTitle },
  data(): ShopCommitmentData {
    return {
      img: {
        src: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
      },
      title: '3つのこだわり',
      subTitle: 'Feature',
      commitments: [
        '全て店内仕込みによる 手づくりの味',
        'メディアやSNSで話題沸騰の 名物プリン',
        '丁寧につくる数量限定の 生産＆販売',
      ],
    }
  },
})
</script>

<style scoped>
.list {
  border-bottom: 1px solid #333;
  width: 500px;
}

.tile {
  background: #ccc;
  width: 30px;
  height: 30px;
}

.sub-font {
  font-size: 1.2rem;
  letter-spacing: .2rem;
}
</style>

