<template>
  <v-container>
    <div class="text-h6 text-center">{{ subTitle }}</div>
    <div class="mb-10 text-h4 text-center">{{ title }}</div>
    <v-row justify="center" align="center" class="px-10">
      <v-col
        v-for="(detail, index) of details"
        :key="`detail-${index}`"
        cols="4"
        class="pa-5"
      >
        <v-img :src="detail.src" aspect-ratio="1" />
        <div class="mt-6">
          <div class="text-h6 text-center">{{ detail.text.one }}</div>
          <div class="text-h6 text-center">{{ detail.text.two }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';

interface UseSceneData {
  title: string;
  subTitle: string;
  details: {
    src: string;
    text: {
      one: string;
      two: string;
    };
  }[];
}

export default Vue.extend({
  name: 'UseScene',
  data(): UseSceneData {
    return {
      title: 'こんな時に',
      subTitle: 'Scene',
      details: [
        {
          src: 'https://picsum.photos/500/300?random',
          text: { one: 'ご家族やご友人と一緒に', two: '賑わう誕生日に' },
        },
        {
          src: 'https://picsum.photos/500/300?random',
          text: { one: 'などのイベントに', two: '賑わう誕生日に' },
        },
        {
          src: 'https://picsum.photos/500/300?random',
          text: { one: 'お世話になっている', two: 'あの人への手土産に' },
        },
      ],
    }
  },
})
</script>

<style scoped>
.about-title {
  text-align: center;
  border: 1px solid;
  letter-spacing: .2rem !important;
  width: 50%;
}

.sub-font {
  font-size: 1.8rem;
  letter-spacing: .2rem;
}
</style>

