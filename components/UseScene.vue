<template>
  <v-container class="my-16">
    <SectionTitle :title="title" :sub-title="subTitle" />
    <ThreeColumns :details="details" />
  </v-container>
</template>

<script lang='ts'>
import Vue from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';
import ThreeColumns from '@/components/ThreeColumns.vue';
import { ColumnItemData } from '@/types/models/componentType';

export default Vue.extend({
  name: 'UseScene',
  components: { SectionTitle, ThreeColumns },
  data(): ColumnItemData {
    return {
      title: 'こんな時に',
      subTitle: 'Scene',
      details: [
        {
          src: 'https://picsum.photos/500/300?random',
          texts: ['ご家族やご友人と一緒に', '賑わう誕生日に',],
        },
        {
          src: 'https://picsum.photos/500/300?random',
          texts: ['などのイベントに', '賑わう誕生日に'],
        },
        {
          src: 'https://picsum.photos/500/300?random',
          texts: ['お世話になっている', 'あの人への手土産に'],
        },
      ],
    }
  },
})
</script>
